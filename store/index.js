import Vue from 'vue';
import Vuex from 'vuex';
import users from './users';

Vue.use(Vuex);

const store = () => new Vuex.Store({
 state: {
 },
 mutations: {
 },
 modules: {
  users
 }
});

export default store
