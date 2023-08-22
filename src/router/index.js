import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Produk from "../views/Produk.vue";
import contact from "../views/Contact.vue";
import singleproduk from "../views/SingleProduk.vue"
import cart from "../views/Cart.vue"
import checkout from "../views/Checkout.vue"
import category from "../views/Category.vue"
import brands from "../views/Brands.vue"

const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: '/produk',
        name: 'Produk',
        component: Produk
    },
    {
        path: '/contak',
        name: 'Contact',
        component: contact
    },
    {
        path: '/produk/:id',
        name: 'SingleProduk',
        component: singleproduk
    },
    {
        path: '/cart',
        name: 'Cart',
        component: cart
    },
    {
        path: '/cekout',
        name: 'Checkout',
        component: checkout
    },
    {
        path: '/category',
        name: 'Category',
        component: category
    },
    {
    path: '/brands',
    name: 'Brands',
    component: brands
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;