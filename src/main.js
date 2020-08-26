import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Toasted from "vue-toasted";
import JwPagination from "jw-vue-pagination";

Vue.component("jw-pagination", JwPagination);

Vue.use(Toasted);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
