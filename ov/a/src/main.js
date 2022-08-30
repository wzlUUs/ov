import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/*  图标 */
import ECharts  from  'vue-echarts'
import "echarts"

/* 图标 ECharts */
Vue.component('ECharts'  , ECharts)
Vue.config.productionTip = false;


import axios from "axios";
Vue.prototype.$axios = axios;

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
/* t图标 */
import * as echarts from 'echarts';
Vue.use(echarts);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
