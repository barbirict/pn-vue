import {createApp} from 'vue'
import App from './App.vue'
import '@/assets/global.css'
import router from '@/router/router'
import store from '@/components/store/index'

const myapp = createApp(App);
myapp.use(store);
myapp.use(router);
myapp.mount('#app')
