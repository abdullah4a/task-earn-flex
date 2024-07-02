<template>
    <div class="dropdown">
        <div class="dropdown-toggle" ref="dropDownRef" id="dropdownMenuButton" data-bs-toggle="dropdown"
            aria-expanded="false" @click="toggleDropDown">
            <img v-if="icon && iconIsImage" :src="icon" alt="Dropdown Icon" class="dropdown-icon" />
            <i v-else-if="icon" :class="icon" class="dropdown-icon"></i>
        </div>
        <ul class="dropdown-menu p-3" aria-labelledby="dropdownMenuButton">
            <li v-for="item in items" :key="item.name" class="dropdown-item-container">
                <router-link v-if="!('action' in item)" :to="item.link" class="dropdown-item">
                    <div class="item-content">
                        <img v-if="item.iconIsImage" :src="item.icon" alt="Item Icon" class="item-icon" />
                        <i v-else :class="item.icon" class="item-icon"></i>
                        <div class="d-flex flex-column">
                            <span class="item-name">{{ item.name }}</span>
                            <p v-if="item.description" class="item-description">{{ item.description }}</p>
                        </div>
                    </div>
                </router-link>
                <div v-else>
                <slot name="default" :actionItem="item"></slot>
                    <!-- <div class="item-content">
                        <img v-if="item.iconIsImage" :src="item.icon" alt="Item Icon" class="item-icon" />
                        <i v-else :class="item.icon" class="item-icon"></i>
                        <div class="d-flex flex-column">
                            <span class="item-name">{{ item.name }}</span>
                            <p v-if="item.description" class="item-description">{{ item.description }}</p>
                        </div>
                    </div> -->
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { Dropdown } from 'bootstrap';
import { defineProps, onMounted, reactive, ref, computed } from 'vue';

// Define props using defineProps
const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
});

// Define Properties
const items = reactive(props.items);
const isOpenDropDown = ref(true);
const dropDownRef = ref(null);
let dropdownInstance = null;

// Computed property to determine if the icon is an image or a class
const iconIsImage = computed(() => {
    return props.icon.includes('.');
});

// Hooks
onMounted(() => {
    dropdownInstance = Dropdown.getOrCreateInstance(dropDownRef.value);
});

// Define Methods
const toggleDropDown = () => {
    isOpenDropDown.value ? showDropdown() : hideDropdown();
};

const showDropdown = () => {
    if (dropdownInstance) {
        dropdownInstance.show();
        isOpenDropDown.value = false;
    }
};

const hideDropdown = () => {
    if (dropdownInstance) {
        dropdownInstance.hide();
        isOpenDropDown.value = true;
    }
};
</script>

<style scoped>
</style>