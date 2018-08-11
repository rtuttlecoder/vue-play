import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

new Vue({
  el: '#app',
  render: h => h(App),
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then(response => console.log(response.data));
  }
})
