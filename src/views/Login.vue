<template>
    <div >
        
    <div class="flex items-center justify-center min-h-screen bg-gray-100 ">
        <div class="px-8 py-6 mx-4 mt-20 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/">
            <div class="flex justify-center">
                <svg class="h-24 w-24x text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
            </div>
            <h3 class="text-2xl font-bold text-center">Vinn Store</h3>
            <form action="" @submit.prevent="performLogin">
                <div class="mt-4">
                    <div>
                        <label class="block" for="Name">Username</label>
                        <input type="text" placeholder="Name" v-model="email" id="email"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                    </div>
                    <div class="mt-4">
                        <label class="block">Password</label>
                        <input type="password" placeholder="Password" v-model="password" id="password"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                    </div>

                    <div class="flex">
                        <button
                            class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                    </div>
                    <div class="mt-6 text-grey-dark">
                        Already have an acount?
                        <a class="text-blue-600 hover:underline" href="/register">
                            Register
                        </a>
                    </div>
                </div>
                
            </form>
        </div>
    </div>
    </div>
    <div >
        gagal
    </div>
    
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        ...mapActions('auth', ['login']),
        async performLogin() {
            const credentials = {
                email: this.email,
                password: this.password,
            };

            const success = await this.login(credentials);
            

            if (success) {
                // Redirect to the desired route on successful login
                this.$router.push('/');
            } else {
                alert("Login Failed");
            }
        },
    },
};
</script>