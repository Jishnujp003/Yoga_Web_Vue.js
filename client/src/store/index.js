// store/index.js
// import Vue from 'vue';
import { createStore } from 'vuex';

// Vue.use(Vuex);

const stores = createStore({
  state: {
    flag: 0,
  },
  getters: {},
  mutations: {},
  actions: {},
});

// const store = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   stores,
// });
export default stores;
