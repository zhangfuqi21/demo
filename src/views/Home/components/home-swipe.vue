<template lang="">
    <div>

<van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
  <van-swipe-item v-for="(item,index) in list" :key="index">
  <img :src="item.imgSrc" alt=""></van-swipe-item>
</van-swipe>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
interface ISwiper{
    imgSrc:string
    link:string
}
const list = ref<ISwiper[]>([])
axios({
  url: '/swiperList',
  method: 'get'
}).then(res => {
  console.log(res)
  list.value = res.data.result
})
</script>
<style lang="less" scoped>

.my-swipe{
  img{
    width: 100%;
  }
}
</style>
