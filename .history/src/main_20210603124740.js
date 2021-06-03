import { BootstrapVue, CardPlugin, DropdownPlugin, LayoutPlugin, ModalPlugin, TablePlugin, VBScrollspyPlugin } from 'bootstrap-vue';
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import Vue, { createApp } from "vue";
import App from './App.vue';
import router from './router';

Vue.use(LayoutPlugin);

Vue.use(ModalPlugin);
Vue.use(CardPlugin);

Vue.use(VBScrollspyPlugin);

Vue.use(DropdownPlugin);
Vue.use(TablePlugin);
Vue.use(BootstrapVue);
createApp(App).use(router).mount('#app')
