import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Form from '../components/Form.vue'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/form',
            component: Form
        }
    ]
})

export default router