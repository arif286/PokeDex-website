import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import Vue, { createApp } from 'vue'
import App from './App.vue'
import router from './router'



Vue.use(BootstrapVue)
createApp(App).use(router).mount('#app')
