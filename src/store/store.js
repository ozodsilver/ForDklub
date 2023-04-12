import { defineStore } from 'pinia'

export const useStore = defineStore('global', {

   state:()=>{
    return{
      infos:[
         {
           id: 1,
           name: "Ozodxon Rabbanaqulov",
           title: "Frontend: 2 yil  tajribasiga ega middle  software enginer.",
           image: new URL("../assets/xodim/ozodxon.png", import.meta.url),
           icon: new URL("../assets/file_type_vue_icon_130078.png", import.meta.url),
           tel: "+998 99 670 03 25",
         },
       
         {
           id: 2,
           name: "Shakhzod Toshboyev",
           title: "2 yil ish tajribasiga ega middle mobile software enginer",
           image: new URL("../assets/xodim/shakhzod.png", import.meta.url),
           icon: new URL("../assets/backgroundForCourser/android.png", import.meta.url),
           tel: "+998 99 670 03 25",
         },
       
         {
           id: 3,
           name: "Omonov Sayidsharifxon",
           title: "fdsfdsfsdfdsfdssss",
           image: new URL("../assets/xodim/sharifxon.png", import.meta.url),
           icon: new URL("../assets/js.png", import.meta.url),
           tel: "+998 99 670 03 25",
         },
       
         {
           id: 4,
           name: "nimdafdsa",
           title: "fdsfdsfsdfdsfdsaaa",
           image: new URL("../assets/xodim/abdulaziz.png", import.meta.url),
           icon: new URL("../assets/dotnet.png", import.meta.url),
           tel: "+998 99 670 03 25",
         },
         {
           id: 5,
           name: "nimdafdsa",
           title: "fdsfdsfsdfdsfdswsedasedas",
           image: new URL("../assets/xodim/shakhzod.jpg", import.meta.url),
           icon: new URL("../assets/backgroundForCourser/android.png", import.meta.url),
           tel: "+998 99 670 03 25",
         },
         {
           id: 6,
           name: "nimdafdsa",
           title: "fdsfdsfsdfdsfdswwwww",
           image: new URL("../assets/xodim/Sardor.png", import.meta.url),
           icon: new URL("../assets/c-.png", import.meta.url),
           tel: "+998 99 670 03 25",
         },
       ]
    }
   }

  })