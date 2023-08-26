<template>
  <NavbarComponent/>
  
  <router-view></router-view>
  <FooterComponent></FooterComponent>
  </template>
  <script>
  import { RouterLink, RouterView } from 'vue-router'
  
  import NavbarComponent from './components/NavbarComponent.vue';
  import FooterComponent from './components/FooterComponent.vue';
  
  export default {
    name: 'App',
    components : {
      NavbarComponent,
      FooterComponent
    }
  }
  </script>
  <style scoped>
  
  </style>