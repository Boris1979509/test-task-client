import mutations from "@/store/mutations";
import api from "@/api";
const { IS_LOGGED_IN, SET_USER } = mutations;
export default {
  namespaced: true,
  state: {
    user: null,
    isLoggedIn: false,
  },
  getters: {
    isLoggedIn: ({ user }) => !!user,
    user: ({ user }) => user,
  },
  mutations: {
    [IS_LOGGED_IN](state, bool) {
      state.isLoggedIn = bool;
    },
    [SET_USER](state, userData) {
      state.user = userData;
    },
  },
  actions: {
    setLoggedIn: {
      root: true,
      async handler({ dispatch }) {
        await dispatch("getUser");
      },
    },
    /** Login  */
    async login({ dispatch }, data) {
      const { message } = await api.login(data);
      await dispatch("getUser");
      /** Message notify */
      dispatch(
        "setNotify",
        {
          type: "success",
          message,
        },
        { root: true }
      );
    },
    /** Logout */
    async logout({ dispatch, commit }) {
      const { message } = await api.logout();
      commit(SET_USER, null);
      /** Message notify */
      dispatch(
        "setNotify",
        {
          type: "success",
          message,
        },
        { root: true }
      );
    },
    /** Signup */
    async signup({ dispatch }, userData) {
      const { message } = await api.signup(userData);
      /** Message notify */
      dispatch(
        "setNotify",
        {
          type: "success",
          message,
        },
        { root: true }
      );
    },
    /** Get user isAuthenticated */
    async getUser({ commit, state }) {
      if (state.user && state.isLoggedIn) return;
      const { user } = await api.getUser();
      commit(SET_USER, user);
    },
  },
};
