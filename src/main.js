import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import Notifications from 'vue-notification';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueMaterial);
Vue.use(Notifications);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
