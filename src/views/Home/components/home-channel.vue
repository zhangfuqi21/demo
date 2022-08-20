<template lang="">
    <div>
<van-tabs v-model:active="active">
  <van-tab @click="c" v-for="item in list" :key="item.id" :title="item.text"></van-tab>
</van-tabs>
    </div>
</template>
<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
interface InavItem{
    id:string
    text:string
}

const active = ref(0)
const list = ref<InavItem[]>([])
axios({
  url: '/navList',
  method: 'get'
}).then(res => {
  list.value = res.data.result
})

</script>
<style lang="less">

</style>
