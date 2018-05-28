import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


import home from '../components/home/home'


const router = new VueRouter({
    routes: [
        {path: '/', component: home, name: 'home'}
    ]
})

export default router;