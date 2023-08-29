<template>
    
    <div v-if="getProduk == false">
        <div class="h-screen bg-white">
            <div class="flex justify-center items-center h-full">
                <img class="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="">
            </div>
        </div>
    </div>
    <div v-else>
        <section class="dark:bg-gray-800 dark:text-gray-100">
		<div class="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
			<div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
				<h1 class="text-5xl font-bold leadi sm:text-6xl">
					<span class="dark:text-violet-900">Vinn Shop</span>
				</h1>
				<p class="mt-6 mb-8 text-lg sm:mb-12">Bingung Mencari tempat belanja online ? vinn shop solusinya
				</p>
				<div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
					<a rel="noopener noreferrer" href="#products" class="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Lihat Produk</a>
				</div>
			</div>
			<div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
				<img src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?size=626&ext=jpg&ga=GA1.1.975559454.1690599805&semt=ais" alt="" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			</div>
		</div>
	</section>
        <div class="mt-10 grid grid-cols-1 gap-1 sm:grid-cols-4 sm:gap-2 lg:mt-16" id="products">
            <!-- <div class="grid md:grid-cols-3 gap-8  mt-10 pl-5"></div> -->
        <div v-for="product in getProduk" :key="product.slug">
            <section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
                <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                   
                        <article class="relative flex flex-col overflow-hidden rounded-lg border">
                            <div class="aspect-square overflow-hidden">
                                <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                                    src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                            </div>
                            <div class="absolute top-0 m-2 rounded-full bg-white">
                                <p
                                    class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                                    Sale</p>
                            </div>
                            <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                                <div class="mb-2 flex">
                                    <p class="mr-3 text-xl font-semibold">Rp.{{ product.base_price }}</p>
                                </div>
                                <h3 class="mb-2 text-2xl ">{{ product.name }}</h3>
                                <!-- <h3 class="mb-2 text-xl text-gray-400">Stok:{{ product.stock }}</h3> -->
                            </div>
                            <router-link :to="{ name: 'SingleProduk', params: { slug: product.slug } }">
                            <button
                                class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                                <div
                                    class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                                    Add</div>
                                <div
                                    class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                                    +</div>
                            </button>
                        </router-link>
                        </article>
                </div>
            </section>
        </div>
    </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('product', ['getProduk']),
    },
    methods: {
        ...mapActions('product', ['fetchProduk']),
    },
    created() {
        this.fetchProduk();
    }
}
</script>