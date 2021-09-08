import {createRouter, createWebHistory} from 'vue-router'
import home from '@/components/views/home.vue'
import login from '@/components/views/login.vue'
import register from '@/components/views/register.vue'
import about from '@/components/views/about.vue'
/*
import cart from ...
import orderHistory from ...
 */


const routes = [
    {path: '/', component: home, name: 'home'},
    {path: '/login', component: login, name: 'login'},
    {path: '/register', component: register, name: 'register'},
    {path: '/about', component: about, name: 'about'}
]

const router = createRouter({history: createWebHistory(process.env.BASE_URL), routes});

export default router;