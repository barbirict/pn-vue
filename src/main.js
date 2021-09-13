import {createApp} from 'vue'
import App from './App.vue'
import '@/assets/global.css'
import router from '@/router/router'
import store from '@/components/store/index'

createApp(App).use(router).use(store).mount('#app')
