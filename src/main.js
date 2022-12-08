import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/css/index.css'

import { Tabbar, TabbarItem } from 'vant';
import { Swipe, SwipeItem } from 'vant';

Vue.config.productionTip = false
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Swipe);
Vue.use(SwipeItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
