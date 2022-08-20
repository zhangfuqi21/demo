<template >
    <div class="list">
        <appVideoItem @click="play1(item.id)" v-for="item in list"  :key="item.id" :video='item'/>
    </div>
</template>
<script setup lang="ts" >
import { ref } from 'vue'
import axios from 'axios'
import appVideoItem from '@/components/app-video-item.vue'
interface IVideoItem{
    id:number,
    imgSrc:string
    desc:string
    playCount:string
    commentCount:string
    videoSrc:string
}

const list = ref<IVideoItem[]>([])
axios({
  method: 'get',
  url: '/videosList'
}).then(res => {
  console.log(res)
  list.value = res.data.result
})
const play1 = (res: number) => {
  console.log(res)
}

</script>
<style lang="less">
.list{
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;
}
</style>
