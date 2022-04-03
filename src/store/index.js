import { createStore } from "vuex";
import auth from "@/store/modules/auth";
import { authGuard } from "@/guards/auth.guards";
import notifications from "@/store/modules/notifications";

const store = createStore({
  modules: {
    auth,
    notifications,
  },
});
/** Auth user */
(async () => {
  await store.dispatch("setLoggedIn");
})();

authGuard(store);

export default store;
