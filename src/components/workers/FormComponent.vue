<template>
    <div class="container">
        <form @submit.prevent="handleSubmit">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="imagePicker">Profile picture</label>
                        <input type="file" class="form-control" id="imagePicker" accept="image/*"
                            @change="onImageChange" />
                    </div>
                    <div v-if="imageUrl" class="mt-3">
                        <img :src="imageUrl" class="img-thumbnail" alt="Selected Image" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input type="text" class="form-control" id="firstName" v-model="form.firstName"
                            placeholder="First Name" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="lastName">Last Name</label>
                        <input type="text" class="form-control" id="lastName" v-model="form.lastName"
                            placeholder="Last Name" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" v-model="form.email" placeholder="Email" />
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group">
                        <label for="phoneNumber">Phone Number</label>
                        <input type="text" class="form-control" id="phoneNumber" v-model="form.phoneNumber"
                            placeholder="Phone Number" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="country">Country</label>
                        <input type="text" class="form-control" id="country" v-model="form.country"
                            placeholder="Country" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="longitude">Longitude</label>
                        <input type="text" class="form-control" id="longitude" v-model="form.longitude"
                            placeholder="Longitude" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="latitude">Latitude</label>
                        <input type="text" class="form-control" id="latitude" v-model="form.latitude"
                            placeholder="Latitude" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="activationCode">Activation Code</label>
                        <input type="text" class="form-control" id="activationCode" v-model="form.activationCode"
                            placeholder="Activation Code" />
                    </div>
                </div>
            </div>
            <div class="d-flex flex-row justify-content-end">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
import usersService from '@/services/api/users.service';

export default {
    props: {
        isNew: {
            type: Boolean,
            required: true
        },
        worker: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            form: {
                firstName: "Jacob",
                lastName: "Wilson",
                email: "jacob.wilson@example.com",
                phoneNumber: "+442034567890",
                latitude: "51.4545",
                longitude: "-2.5879",
                employeeID: "EMP011",
                city: "Bristol",
                country: "United Kingdom",
                activationCode: ""
            },
            imageUrl: null
        };
    },
    mounted() {
        if (this.worker) {
            this.form = this.worker;
        }
    },
    computed: {
        formFields() {
            return Object.keys(this.form);
        }
    },
    methods: {
        handleSubmit() {
            if (this.isNew) {
                this.saveEmployee()
            } else {
                console.log("🚀 ~ handleSubmit ~ this.worker:", this.worker)
            }
        },
        async saveEmployee() {
            const payload = { ...this.form }
            try {
                const { data } = await usersService.addUser(payload)
                console.log("🚀 ~ saveEmployee ~ data:", data)
                this.$emit('fetchRecords')
                this.$emit('closeModal')
            } catch (error) {
                console.error("🚀 ~ saveEmployee ~ error:", error)
            }
        },
        onImageChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.imageUrl = URL.createObjectURL(file);
            }
        }
    }
};
</script>

<style scoped>
.container {
    margin-top: 20px;
}
</style>