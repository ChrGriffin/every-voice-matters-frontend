import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

import {VueMasonryPlugin} from 'vue-masonry';
Vue.use(VueMasonryPlugin);

import VueScrollactive from 'vue-scrollactive';
Vue.use(VueScrollactive);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
