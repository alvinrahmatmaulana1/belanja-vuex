<template>
    <div v-if="getcategory == false">
        <div class="h-screen bg-white">
            <div class="flex justify-center items-center h-full">
                <img class="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="">
            </div>
        </div>
    </div>
    <div v-else>
    <div class="grid md:grid-cols-3 gap-8  mt-10 pl-5">
        <div  v-for="category in getcategory">
            
        <div class="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
            <img :src="category.banner" alt="">
          <h1> {{ category.name }} </h1>

              
        </div>
        </div>
        </div>


</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
    
    export default {
        computed: {
            ...mapGetters('category', ['getcategory']),
        },
        methods: {
            ...mapActions('category', ['fetchCategory']),
    },
    created(){
        this.fetchCategory();
    }
}
</script>