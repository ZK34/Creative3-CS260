import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue"
import Cart from "../views/Cart.vue"
import Gallery from "../views/Gallery.vue"
import Store from "../views/Store.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home-view",
    component: Home
  },
  {
    path: "/about",
    name: "About-view",
    component: About
  },
  {
    path:"/gallery",
    name:"Gallery-view",
    component: Gallery
  },
  {
    path:"/cart",
    name:"Cart-view",
    component: Cart
  },
  {
    path:"/store",
    name:"Store-view",
    component: Store
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
