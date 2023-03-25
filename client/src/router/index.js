import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/home/HomeView.vue';
// import PingPing from '../components/Ping.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../components/registration/RegistraTion.vue'),
  },
  /* {
    path: '/popup',
    name: 'PopUp',
    component: () => import('../components/PopUp.vue'),
  }, */
  {
    path: '/login',
    name: 'LogIn',
    component: () => import('../components/login/LogIn.vue'),
  },
  {
    path: '/forgotpassword',
    name: 'forgotpassword',
    component: () => import('../components/forgotpassword/ForgotPassword.vue'),
  },
  // {
  //   path: '/ping',
  //   name: 'PingPing',
  //   component: PingPing,
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/asanas',
    name: 'asaNas',
    component: () => import('../components/AsaNas.vue'),
  },
  {
    path: '/prana',
    name: 'pranaYama',
    component: () => import('../components/PranaYama.vue'),
  },
  {
    path: '/tadasana',
    name: 'TadaSana',
    component: () => import('../components/TadaSana.vue'),
  },
  {
    path: '/Bhastrika',
    name: 'BhastRika',
    component: () => import('../components/BhastRika.vue'),
  },
  {
    path: '/Bhujangasana',
    name: 'BhujangAsana',
    component: () => import('../components/Bhujangasana.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
