<template>
    <div>
        <h1>{{ title }}</h1>
        <app-data-table :items="users" :headers="headers" showSearch showAdd addBtnTitle="Worker" @add="showAddModal" @update="showUpdateModal" @delete="showDeleteModal" />
    </div>
</template>

<script setup>
// Imports
import usersService from '@/services/api/users.service';
import { fetchActivationCode } from '@/utils/helper/activationCode';
import { ref } from 'vue'

// Properties
const title = ref("List View")
const users = ref([{name: "Test User"}])
const headers = ref([
    {text: "Worker", key:"profile"},
    {text: "Hiring ID", key:"Hiring_TestID"},
    {text: "Country", key:"country"},
    {text: "City", key:"city"},
    {text: "Latitude", key:"latitude"},
    {text: "Longitude", key:"longitude"},
])

// Methods
const parseUsers = (userData) =>{
    if(Array.isArray(userData)){
        users.value = userData.map(user=>{
            console.log("🚀 ~ parseUsers ~ user:", user)
            const newUser={...user}
            const profile= `
                    <div class="container mt-4">
                        <div class="card" style="max-width: 340px;">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="${user.profilePicture}" class="img-fluid round" alt="User Profile Picture">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body small">
                                        <h5 class="card-title">${user.firstName} ${user.lastName}</h5>
                                        <p class="card-text"><i class="bi bi-telephone"></i> ${user.phoneNumber}</p>
                                        <p class="card-text"><i class="bi bi-envelope"></i> ${user.email}</p>
                                        <p class="card-text"><i class="bi bi-person-video"></i> ${user.employeeID}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
            newUser.profile = profile
            return newUser
        })
    }
}
const getUsers=async ()=>{
    // Get users from API
    try {
        await fetchActivationCode()
        const {data} = await usersService.getUsers()
        parseUsers(data)
    } catch (error) {
        console.log("🚀 ~ getUsers ~ error:", error)
        
    }

}
getUsers()
const showAddModal=()=>{
    console.log("Add Modal")
}
const showUpdateModal = (selectedUser) => {
    console.log("🚀 ~ showUpdateModal ~ selectedUser:", selectedUser)
}
const showDeleteModal = (selectedUser) => {
    console.log("🚀 ~ showDeleteModal ~ selectedUser:", selectedUser)
}
</script>

<style lang="scss" scoped></style>