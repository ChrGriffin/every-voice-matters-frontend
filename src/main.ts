import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false;

import {VueMasonryPlugin} from 'vue-masonry';
Vue.use(VueMasonryPlugin);

import VueScrollactive from 'vue-scrollactive';
Vue.use(VueScrollactive);

Vue.use(VueAnalytics, {
    id: 'UA-73783760-3',
});

new Vue({
  router,
  render: (h) => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered')),
}).$mount('#app');
