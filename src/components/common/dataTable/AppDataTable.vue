<template>
    <div class="data-table">
        <!-- Search and Add row -->
        <div class="row mb-3 d-flex flex-row justify-content-end">
            <div class="col-md-1 d-flex justify-content-end" v-if="props.showAdd">
                <button class="btn btn-success align-items-center" @click="addItem">
                    <i class="bi bi-plus-lg pe-2"></i>
                    <span>{{ props.addBtnTitle }}</span>
                </button>
            </div>
            <div class="col-md-2  d-flex justify-content-start" v-if="showSearch">
                <div class="input-group">
                    <input type="text" class="form-control" v-model="searchQuery" placeholder="Search..."
                        @input="search">
                </div>
            </div>
        </div>

        <!-- Table -->
        <table class="table table-striped">
            <thead>
                <tr>
                    <th v-for="(header, index) in headers" :key="index" @click="sortBy(header.key)">
                        {{ header.text }}
                        <span v-if="sortedColumn === header.key">
                            <i :class="sortOrder === 'asc' ? 'bi bi-arrow-up' : 'bi bi-arrow-down'"></i>
                        </span>
                    </th>
                    <th v-if="!notShowData">Actions</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="!notShowData">
                    <tr v-for="item in pagedItems" :key="item.id">
                        <td v-for="(header, index) in headers" :key="index">
                            <span v-if="header.key === 'profile'" v-html="item.profile"></span>
                            <span v-else-if="header.key === 'rating'" v-html="item.rating"></span>
                            <span v-else-if="header.key === 'activationCode'" v-html="item.activationCode"></span>
                            <span v-else-if="header.key === 'transport'" v-html="item.transport"></span>
                            <span v-else-if="header.key === 'industry'" v-html="item.industry"></span>
                            <span v-else>{{ item[header.key] }}</span>
                        </td>
                        <td>
                            <!-- bi bi-three-dots-vertical -->
                            <app-drop-down :items="actions" icon="bi bi-three-dots-vertical">
                                <template #default="{ actionItem }">
                                    <div class="item-content" @click="actionItem['action'](item)">
                                        <img v-if="actionItem.iconIsImage" :src="actionItem.icon" alt="Item Icon"
                                            class="item-icon" />
                                        <i v-else :class="actionItem.icon" class="item-icon"></i>
                                        <div class="d-flex flex-column">
                                            <span class="item-name">{{ actionItem.name }}</span>
                                            <p v-if="actionItem.description" class="item-description">{{ actionItem.description }}
                                            </p>
                                        </div>
                                    </div>
                                </template>
                            </app-drop-down>
                        </td>
                    </tr>
                </template>
                <template v-else>
                    <tr>
                        <td :colspan="headers.length + 1" class="text-center">No data available</td>
                    </tr>
                </template>
            </tbody>
        </table>

        <!-- Pagination -->
        <div class="d-flex justify-content-between">
            <button class="btn btn-outline-primary" @click="prevPage"
                :disabled="currentPage === 1 || notShowData">Previous</button>
            <span :disabled="notShowData">Page {{ currentPage }} of {{ totalPages }}</span>
            <button class="btn btn-outline-primary" @click="nextPage"
                :disabled="currentPage === totalPages || notShowData">Next</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue';

// Props
const props = defineProps({
    items: {
        type: Array,
        required: true
    },
    headers: {
        type: Array,
        required: true
    },
    rowsPerPage: {
        type: Number,
        default: 10
    },
    showSearch: {
        type: Boolean,
        default: false
    },
    showAdd: {
        type: Boolean,
        default: false
    },
    addBtnTitle: {
        type: String,
        default: ""
    }
});
const emit = defineEmits(['add', 'update', 'delete']);

// Properties
const searchQuery = ref('');
const sortedColumn = ref('');
const sortOrder = ref('asc');
const currentPage = ref(1);
const actions = [{
    name: 'update',
    action: performUpdate,
    icon: "bi bi-pencil"
}, {
    name: "delete",
    action: performDelete,
    icon: "bi bi-trash3"
}]

// Computed
const filteredItems = computed(() => {
    if (searchQuery.value) {
        return props.items.filter(item =>
            Object.values(item).some(value =>
                String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
            )
        );
    }
    return props.items;
});

const sortedItems = computed(() => {
    if (!sortedColumn.value) {
        return filteredItems.value;
    }
    return sortItems(filteredItems.value, sortedColumn.value, sortOrder.value);
});

const pagedItems = computed(() => {
    const start = (currentPage.value - 1) * props.rowsPerPage;
    const end = start + props.rowsPerPage;
    return sortedItems.value.slice(start, end);
});
const notShowData = computed(() => {
    return props.items.length < 1;
});

const totalPages = computed(() => Math.ceil(sortedItems.value.length / props.rowsPerPage));

// Methods
const search = () => {
    currentPage.value = 1;
};

const sortBy = (key) => {
    if (sortedColumn.value === key) {
        sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortedColumn.value = key;
        sortOrder.value = 'asc';
    }
};

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

const addItem = () => {
    emit('add');
};

function performUpdate(item) {
    console.log("🚀 ~ performAction ~ item:", item)
    emit('update', item);
}
function performDelete(item) {
    console.log("🚀 ~ performAction ~ item:", item)
    emit('delete', item);
}
// Function to sort items
function sortItems(items, sortKey, sortOrder) {
    return items && items.slice().sort((a, b) => {
        if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
        if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
        return 0;
    });
}
</script>

<style scoped>
.data-table {
    width: 100%;
}

.btn-outline-secondary {
    border-color: #6c757d;
    color: #6c757d;
}

.btn-outline-secondary:hover {
    background-color: #6c757d;
    color: white;
}

.table {
    margin-bottom: 1rem;
}

th {
    cursor: pointer;
}

.bi {
    vertical-align: text-bottom;
}
</style>