<template>
    
    <div>
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