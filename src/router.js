import { createRouter, createWebHistory } from "vue-router";
import Home from './pages/Home.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }

        return {
            top: 0,
            left: 0
        }
    }
});

export default router;

