import { createApp } from 'vue'
import App from './App.vue'
import { Tab, Tabs, Swipe, SwipeItem } from 'vant'
import router from './router'
import store from './store'

import '@/mock/index'
import '@/assets/styles/base.less'
import '@/assets/styles/iconfont.less'

createApp(App).use(Swipe).use(SwipeItem).use(Tabs).use(Tab).use(store).use(router).mount('#app')
