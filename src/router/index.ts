import { createRouter, createWebHashHistory } from 'vue-router';
// import component from '../env';
import SelfControlle from '../components/SelfControlle.vue';
import DayController from '../components/DayController.vue';

const routes = [
  {
    path: './SelfControlle',
    name: 'SelfControlle',
    component: SelfControlle,
  },
  {
    path: './DayController',
    name: 'DayController',
    component: DayController,
  },
];
export const Router = createRouter({
  history: createWebHashHistory(),
  routes,
});
