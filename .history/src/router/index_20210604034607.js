import { createRouter, createWebHistory } from 'vue-router';
import App from '../App';
import About from '../views/About.vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'App',
    component: App,
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon',
    component: About,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
