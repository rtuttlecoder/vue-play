import Vue from 'vue';
import axios from 'axios';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Vuelidate);

axios.defaults.baseURL = 'https://axios-auth-d418e.firebaseio.com/';
// axios.defaults.headers.common['Authorization'] = 'xxxxxxxxxx';

const reqInter = axios.interceptors.request.use(config => {
  console.log('reqester: ' + config);
  return config;
});

const resInter = axios.interceptors.response.use(res => {
  console.log('response: ' + res);
  return res;
});

axios.interceptors.request.eject(reqInter);
axios.interceptors.request.eject(resInter);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
