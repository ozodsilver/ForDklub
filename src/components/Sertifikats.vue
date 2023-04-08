<template>
    <div>
        <h1 class="py-5 bag px-3 w-25">Sertifikatlar</h1>
<div class="container py-5">
<div class="row">
<div class="col-4" v-for="sertifikat of sertifikats" :key="sertifikat.id">
<img :src="sertifikat.image" alt=""   class="img-fluid">
</div>
</div>
</div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

let sertifikats = ref([
    {
        id:1,
        image:new URL('../assets/sertifikats/sertifikat.png', import.meta.url)
    },

    {
        id:2,
        image:new URL('../assets/sertifikats/sertifikat.png', import.meta.url)
    },

    {
        id:3,
        image:new URL('../assets/sertifikats/sertifikat.png', import.meta.url)
    }
])

</script>

<style lang="scss" scoped>


.bag {
    background: rgb(93, 191, 156);
  background: linear-gradient(13deg, rgba(93, 191, 156, 1) 0%, rgba(53, 73, 94, 1) 56%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-bottom: 3px double rgb(93, 191, 156)
}
</style>