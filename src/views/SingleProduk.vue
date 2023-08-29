<template>
  <section class="py-12 sm:py-16">
    <div v-if="products">
      <div class="container mx-auto px-4">
        <div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <div class="lg:col-span-3 lg:row-end-1">
            <div class="lg:flex lg:items-start">
              <div class="lg:order-2 lg:ml-5">
                <div class="max-w-xl overflow-hidden rounded-lg">
                  <img class="h-full w-full max-w-full object-cover"
                    src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="" />
                </div>
              </div>

              <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div class="flex flex-row items-start lg:flex-col">
                  <button type="button"
                    class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
                    <img class="h-full w-full object-cover"
                      src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="" />
                  </button>
                  <button type="button"
                    class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                    <img class="h-full w-full object-cover"
                      src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="" />
                  </button>
                  <button type="button"
                    class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                    <img class="h-full w-full object-cover"
                      src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">{{ products.name }}</h1>

            <div class="mt-5 flex items-center">
              <div class="flex items-center">
                <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20" fill="currentColor">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    class=""></path>
                </svg>
                <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20" fill="currentColor">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    class=""></path>
                </svg>
                <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20" fill="currentColor">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    class=""></path>
                </svg>
                <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20" fill="currentColor">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    class=""></path>
                </svg>
                <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20" fill="currentColor">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    class=""></path>
                </svg>
              </div>
              <p class="ml-2 text-sm font-medium text-gray-500">1 Reviews</p>
            </div>


            <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.
              Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque</p>


            <h2 class="mt-8 text-base text-gray-900">Warna</h2>
            <div class="mt-3 flex select-none flex-wrap items-center gap-1">
              <label class="">
                <input type="radio" name="subscription" value="4 Months" class="peer sr-only" />
                <p
                  class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                  Biru</p>

              </label>
              <label class="">
                <input type="radio" name="subscription" value="8 Months" class="peer sr-only" checked />
                <p
                  class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                  Merah</p>

              </label>
              <label class="">
                <input type="radio" name="subscription" value="12 Months" class="peer sr-only" />
                <p
                  class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                  Hitam</p>
              </label>
            </div>

            <!-- counter -->
            <div class="flex items-center mt-5">
              <button @click="decrementQty" class="border rounded-md py-2 px-4 mr-2">-</button>
              <input type="number" class="text-center w-20 border rounded-md py-2 px-2" v-model="number">
              <!-- <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1"> -->
              <button @click="incrementQty" class="border rounded-md py-2 px-4 ml-2">+</button>
            </div>


            <div class="absolute top-0 right-1 flex sm:bottom-0 sm:top-auto">
              <button type="button"
                class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                <svg class="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" class="">
                  </path>
                </svg>
              </button>
            </div>


            <div
              class="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
              <div class="flex items-end">
                <h1 class="text-3xl font-bold">Rp.{{ products.base_price * number }}</h1>

              </div>

              <div v-if="token">
                <button type="button" @click="addKeranjang({ variation_id: products.variations[0].id, qty: number })"
                  class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  + Keranjang
                </button>
              </div>

              <div v-else>
                <router-link to="/login">
                  <button type="button"
                    class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        
                    </svg>
                    + keranjang
                  </button>
                </router-link>
              </div>
            </div>

          </div>

          <div class="lg:col-span-3">
            <div class="border-b border-gray-300">
              <nav class="flex gap-4">
                <a href="#" title=""
                  class="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
                  Reviews
                  <span class="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> 3
                  </span>
                </a>
              </nav>
            </div>

            <ul class="" >
              <li class="py-8 text-left  px-4 m-2">
                <div class="flex items-start">
                  <img class="block h-10 w-10 max-w-full flex-shrink-0 rounded-full align-middle"
                    src="data:image/png;base64,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" alt="" />

                  <div class="ml-6">
                    
                      <p class="mt-5 text-sm font-bold text-gray-900">John Lester</p>
                     
                    
                    <p class="mt-5 text-base text-gray-900">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Porro blanditiis sapiente ab dolores, ad dignissimos perspiciatis.</p>
                     <div class="flex items-center">
                      <svg class="block h-6 w-6 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""></path>
                      </svg>
                      <svg class="block h-6 w-6 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""></path>
                      </svg>
                      <svg class="block h-6 w-6 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""></path>
                      </svg>
                      <svg class="block h-6 w-6 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""></path>
                      </svg>
                      <svg class="block h-6 w-6 align-middle text-gray-400" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""></path>
                      </svg>
                      <p class=" text-sm text-gray-600">March 01, 2022</p>
                    </div>
                    
                  </div>
                </div>
              </li>
            </ul>

            <ul class="">
              <li class="py-8 text-left  px-4 m-2">
                <div class="flex items-start">
                  <img class="block h-10 w-10 max-w-full flex-shrink-0 rounded-full align-middle"
                    src="data:image/png;base64,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" alt="" />

                  <div class="ml-6">
                    
                      <p class="mt-5 text-sm font-bold text-gray-900">John Lester</p>
                     
                    
                    <p class="mt-5 text-base text-gray-900">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Porro blanditiis sapiente ab dolores, ad dignissimos perspiciatis.</p>
                     <div class="flex items-center">
                      <svg class="block h-6 w-6 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""></path>
                      </svg>
                      <svg class="block h-6 w-6 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""></path>
                      </svg>
                      <svg class="block h-6 w-6 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""></path>
                      </svg>
                      <svg class="block h-6 w-6 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""></path>
                      </svg>
                      <svg class="block h-6 w-6 align-middle text-gray-400" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""></path>
                      </svg>
                      <p class=" text-sm text-gray-600">March 01, 2022</p>
                    </div>
                    
                  </div>
                </div>
              </li>
            </ul>

            <ul class="">
              <li class="py-8 text-left  px-4 m-2">
                <div class="flex items-start">
                  <img class="block h-10 w-10 max-w-full flex-shrink-0 rounded-full align-middle"
                    src="data:image/png;base64,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" alt="" />

                  <div class="ml-6">
                    
                      <p class="mt-5 text-sm font-bold text-gray-900">John Lester</p>
                     
                    
                    <p class="mt-5 text-base text-gray-900">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Porro blanditiis sapiente ab dolores, ad dignissimos perspiciatis.</p>
                     <div class="flex items-center">
                      <svg class="block h-6 w-6 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""></path>
                      </svg>
                      <svg class="block h-6 w-6 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""></path>
                      </svg>
                      <svg class="block h-6 w-6 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""></path>
                      </svg>
                      <svg class="block h-6 w-6 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""></path>
                      </svg>
                      <svg class="block h-6 w-6 align-middle text-gray-400" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""></path>
                      </svg>
                      <p class=" text-sm text-gray-600">March 01, 2022</p>
                    </div>
                    
                  </div>
                </div>
              </li>
            </ul>


          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="h-screen bg-white">
      <div class="flex justify-center items-center h-full">
        <img class="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="">
      </div>
    </div>
  </div>
</section></template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      token: null,
      number: 1
    }
  },
  computed: {
    ...mapGetters("product", ["getProdukSlug"]),
    products() {
      return this.getProdukSlug(this.$route.params.slug);
    },
  },
  methods: {
    ...mapActions("product", ["fetchSingleProduk"]),
    ...mapActions("product", ["fetchProduk"]),
    ...mapActions("keranjang", ["fetchKeranjang",]),



    decrementQty() {
      if (this.number > 1) {
        this.number--;
      }
    },

    incrementQty() {
      this.number++;
    },
    ...mapActions("product", ["addKeranjang"]),
  },
  beforeMount() {
    this.fetchProduk()
    this.fetchKeranjang()

  },
  mounted() {
    const Slug = this.$route.params.slug;
    this.fetchSingleProduk(Slug)

    //cek token
    const cektoken = localStorage.getItem('token');
    this.token = cektoken
  }


};
</script>