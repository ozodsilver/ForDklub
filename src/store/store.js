import { defineStore } from 'pinia'

export const useStore = defineStore('global', {

   state:()=>{
    return{isActive:true}
   }

  })