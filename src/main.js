import { createApp } from 'vue';
import { createWebHashHistory } from 'vue-router';
import { createRouter } from 'vue-router';
import App from './App.vue';
import Home from '@/pages/MainPage.vue';


const routes = [
  {
    component: Home,
    path: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(App)
  .use(router)
  .mount('#app');
