<template>
    <div>
        <div class="d-flex align-middle p-3">
            <div class="d-flex align-middle">
                <div class="pe-1">
                    <i class="bi bi-chevron-left icon-green"></i>
                </div>
                <h4>{{ title }}</h4>
            </div>
            <!-- show search bar -->
            <div class="ms-auto pe-4 w-25">
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon1" v-if="!searchIcon"><i
                            class="bi bi-search"></i></span>
                    <input class="form-control" id="search-input" v-model="searchTerm" type="search"
                        placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" @input="hideSearchIcon"
                        @keydown.enter="onPressEnter">
                </div>
            </div>
            <!-- show link icon -->
            <!-- show notification dropDown -->
            <div class="pe-4">
                <app-drop-down :items="notificationList" icon="bi bi-bell" />
            </div>
            <div class="pe-4">
                <i class="bi bi-grid"></i>
            </div>
            <div class="pe-4">
                <i class="bi bi-brightness-low-fill icon-yellow"></i>
            </div>
            <!-- show user drop down -->
            <div class="pe-4">
                <app-drop-down :items="menuList" :icon="require('../../../assets/images/logo.svg')" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
const props = defineProps({
    title: {
        type: String,
        required: true
    },
})
const title = ref(props.title)
const searchIcon = ref(false)

// Properties
const notificationList = [
    {
        name: "notification 1.",
        description: "Test Notification, user have been tested",
        link: "/",
        iconIsImage: false,
        icon: "bi bi-person"
    }, {
        name: "notification 2.",
        description: "Test Notification, user have been tested",
        link: "/workers-all",
        iconIsImage: false,
        icon: "bi bi-person"
    }, {
        name: "notification 3.",
        description: "Test Notification, user have been tested",
        link: "/settings",
        iconIsImage: false,
        icon: "bi bi-person"
    }
]
const menuList = [
    {
        name: "Dashboard",
        link: "/",
        icon: "bi bi-grid"
    }, {
        name: "Workers",
        link: "/workers-all",
        icon: "bi bi-people"
    }, {
        name: "Settings",
        link: "/settings",
        icon: "bi bi-gear"
    }
]
const searchTerm = ref('')
// Methods
const onPressEnter = () => {
    console.log("enter")
}
const hideSearchIcon = () => {
    searchIcon.value = searchTerm.value !== ''
}
</script>

<style lang="scss" scoped>
nav {
    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

.input-group-text {
    border: none;
    border-radius: 0;
    position: absolute;
    z-index: 1000;
    background-color: transparent;
    right: 0px
}

#search-input {
    border-radius: 50px;
}

.icon-yellow {
    color: #f2c94c;
}
.icon-green{
    font-weight: bolder;
    color: green;
}
</style>
