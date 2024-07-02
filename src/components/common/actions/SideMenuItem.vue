<template>
    <div>
        <router-link
            v-if="!item.children"
            :to="item.path"
            class="nav-link text-white"
            :class="{ active: $route.path === item.path }"
            @click="closeDropDown"
        >
            <template v-if="item.icon !== ''">
                <i :class="item.icon"></i>
            </template>
            <template v-else-if="item.image">
                <img :src="item.image" alt="Dropdown Icon" class="dropdown-icon" />
            </template>
            &nbsp;
            <span :class="{ 'd-none d-md-flex': !isMobile }">{{ item.title }}</span>
        </router-link>
        <div v-else>
            <div class="nav-link text-white" @click="toggleDropdown" :class="{ active: isOpen }">
                <i :class="item.icon"></i>
                <span>{{ item.title }}</span>
                <i :class="isOpen ? 'bi bi-chevron-down' : 'bi bi-chevron-right'"></i>
            </div>
            <ul v-if="isOpen" class="nav flex-column ms-3">
                <side-menu-item v-for="(child, index) in item.children" :key="index" :item="child" />
            </ul>
        </div>
    </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
    name: "SideMenuItem",
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const isOpen = ref(false);
        const route = useRoute();
        const router = useRouter();
        const isMobile = computed(() => window.innerWidth < 768); // Adjust as per your mobile breakpoint

        const toggleDropdown = () => {
            isOpen.value = !isOpen.value;
        };
        const closeDropDown = () => {
            isOpen.value = false;
        };

        return {
            items: props.item,
            isOpen,
            toggleDropdown,
            route,
            router,
            isMobile,
            closeDropDown,
        };
    },
};
</script>

<style scoped>
.nav-link {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem;
    margin: 5px 0;
}

.nav-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

.nav-link i {
    font-size: larger;
}

.nav-link .bi-chevron-down, .nav-link .bi-chevron-right {
    margin-left: auto;
}

.nav-link.active {
    font-weight: bold;
    color: white !important;
    background-color: #263040 !important;
}

.dropdown-icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 50%;
}
</style>
