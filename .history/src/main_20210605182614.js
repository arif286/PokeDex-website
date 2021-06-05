import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

AOS.init();
createApp(App).use(router).mount('#app')
