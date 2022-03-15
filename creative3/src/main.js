import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import merch from "./item"

Vue.config.productionTip = false;

let data = {
  products: merch,
  cart: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");
