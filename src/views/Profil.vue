<template>
    <div class="p-16">
        <div class="p-8 bg-white shadow mt-24">
            <div class="grid grid-cols-1 md:grid-cols-3">
                <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                    <div>
                        <p class="font-bold text-gray-700 text-xl">{{ getKeranjang.length }}</p>
                        <p class="text-gray-400">Keranjang</p>
                    </div>
                    <div>
                        <p class="font-bold text-gray-700 text-xl">{{ getUsers.balance}}</p>
                        <p class="text-gray-400">balance</p>
                    </div>
                    <div>
                        <p class="font-bold text-gray-700 text-xl">89</p>
                        <p class="text-gray-400">Comments</p>
                    </div>
                </div>
                <div class="relative">
                    <div
                        class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clip-rule="evenodd" />
                    </svg> </div>
                </div>
            </div>
            
        <div class="mt-20 text-center border-b pb-12">
            <h1 class="text-4xl font-medium text-gray-700">{{ getUsers.name }}</h1>
            <p class="font-light text-gray-600 mt-3">{{ getUsers.email }}</p>
            <p class="mt-8 text-gray-500">{{ getUsers.phone }}</p>
            <h1 class="mt-2 text-gray-500">Alamat</h1>
            <hr>
            <p class=" text-left">Jalan : {{ getAddress.address }}</p>
            <p class=" text-left">Kota : {{ getAddress.city }}</p>
            <p class=" text-left">Profinsi : {{ getAddress.state }}</p>
            <p class=" text-left">Negara : {{ getAddress.country }}</p>
        </div>

       
        
        
    </div>
</div></template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('user', ['getUsers']),
        ...mapGetters('keranjang', ['getKeranjang','getAddress']),
        ...mapGetters('order', ['getOrder'])
    },
    methods: {
        ...mapActions('user', ['fetchUsers']),
        ...mapActions("keranjang", ["fetchKeranjang","fetchAddress"]),
        ...mapActions('order',['fetchOrderData'])
    },
    created() {
        this.fetchUsers();
        this.fetchAddress()
    }
}

</script>