import Vue from "vue";
import VueRouter from "vue-router";
import Beats from "../views/Beats.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Beats",
    component: Beats
  },
  {
    path: "/Contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
