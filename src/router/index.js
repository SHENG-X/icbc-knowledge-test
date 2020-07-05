import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/rules',
    name: 'rules',
    component: () => import('../views/Rules.vue'),
  },
  {
    path: '/signs',
    name: 'signs',
    component: () => import('../views/Signs.vue'),
  },
  {
    path: '/archived',
    name: 'archived',
    component: () => import('../views/Archived.vue'),
  },
  {
    path: '/mock',
    name: 'mock',
    component: () => import('../views/MockQuestions.vue'),
  },
  {
    path: '/all',
    name: 'all',
    component: () => import('../views/AllQuestions.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
