import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/css/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
Vue.use(BootstrapVue)


createApp(App).use(router).mount('#app')
