import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "Home",
      layout: "home",
    },
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      layout: "auth",
      title: "Login",
    },
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    meta: {
      layout: "auth",
      title: "Signup",
    },
    component: () => import("@/views/SignUp.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/views/NotFound.vue"),
    meta: {
      title: "404 - Page not found",
    },
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
