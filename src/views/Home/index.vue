<template>
    <div>
<AppHeader/>
<HomeChannel/>
<HomeSwipe/>
<HomeVideoList/>
    </div>
</template>
<script  lang="ts">

import AppHeader from '@/components/app-header.vue'
import HomeChannel from './components/home-channel.vue'
import HomeSwipe from './components/home-swipe.vue'
import HomeVideoList from './components/home-video-list.vue'

export default {
  name: 'Home-index',
  components: { AppHeader, HomeChannel, HomeSwipe, HomeVideoList }
}
</script>
<style lang="less">

</style>
