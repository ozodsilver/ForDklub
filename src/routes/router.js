import  { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../components/mainComp.vue'
import Regestration from '@/components/regestrationForCourses.vue'

const routes =  [
    {
        path:'/',
        name:'Main',
        component:Main
    },
    {
        path:'/regestration',
        name:'regestration',
        component:Regestration
    },


    
]


let router = createRouter({
    routes,
    history: createWebHashHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            if (savedPosition) {
                return savedPosition
              } else {
                return { top: 100 }
              }
        }
      }
})



export default router;
