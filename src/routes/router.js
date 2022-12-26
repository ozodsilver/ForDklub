import  { createRouter, createWebHashHistory } from 'vue-router'
import Header from '../components/Home.vue'
import Footer from '../components/Footer.vue'


const routes =  [
    {
        path:'/',
        name:'link1',
        component:Header
    },


    {
        path:'/Footers',
        name:'link2',
        component:Footer
    },

]


let router = createRouter({
    routes,
    history: createWebHashHistory(),
})



export default router
