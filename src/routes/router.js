import  { createRouter, createWebHashHistory } from 'vue-router'
import Header from '../components/Home.vue'
import KurslarXaqida from '../components/KurslarXaqida.vue'


const routes =  [
    {
        path:'/',
        name:'link1',
        component:Header
    },


    {
        path:'/Footers',
        name:'link2',
        component:KurslarXaqida
    },

]


let router = createRouter({
    routes,
    history: createWebHashHistory(),
})



export default router
