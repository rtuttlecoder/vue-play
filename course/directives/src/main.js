import Vue from 'vue';
import App from './App.vue';

// global custom directive
Vue.directive('highlight', {
  // once directive is attached
  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green';
    var delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
    
  }
  // inserted(el, binding, nvode) --> inserted in parent node
  // update(el, binding, vnode, oldVnode) --> once component is updated, without children
  // componentUpdated(el, binding, vnode, oldVnode) --> once component is updated, with children
  // unbind(el, binding, vnode) --> once directive is removed
});

new Vue({
  el: '#app',
  render: h => h(App)
});
