import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/productos/:id',
        name: 'Productos',
        component: () =>
            import ( /* webpackChunkName: "productos" */ '../views/Productos.vue')
    },
    {
        path: '/contacto',
        name: 'Contacto',
        component: () =>
            import ( /* webpackChunkName: "contacto" */ '../views/Contacto.vue')
    }
]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router