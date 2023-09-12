import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue'; 
import CountryDetail from '../views/CountryDetail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/:countryName',
      name: 'CountryDetail',
      component :CountryDetail
    }
],
});

export default router;
