import router from "@/router";

export const authGuard = (store) => {
  const authRoutes = ["login", "signup"];

  router.beforeEach((to, from, next) => {
    /**
     * Скрыть страницы
     * для аутентифицированного пользователя
     */
    if (authRoutes.includes(to.name) && store.getters["auth/isLoggedIn"]) {
      return next({ name: "home" });
    }
    if (!authRoutes.includes(to.name) && !store.getters["auth/isLoggedIn"]) {
      return next({ name: "login" });
    }

    return next();
  });
};
