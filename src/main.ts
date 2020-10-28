import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'lib-flexible/flexible';
import '@/styles/reset.css';
import '@amap/amap-jsapi-types';

import { Tabbar, TabbarItem, Icon } from 'vant';

const app = createApp(App);

app
  .use(Tabbar)
  .use(TabbarItem)
  .use(Icon)
  .use(store)
  .use(router)
  .mount('#app');
