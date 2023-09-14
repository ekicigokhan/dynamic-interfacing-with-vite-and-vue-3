import { createRouter, createWebHistory } from "vue-router";
import Map from "../views/Map.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/Map.vue"),
    },
    {
      path: "/login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/profile",
      component: () => import("../views/Profile.vue"),
    },
  ],
});

export default router;
