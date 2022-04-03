<template>
  <app-navbar>
    <app-name />
    <nav-links :email="email" />
  </app-navbar>
  <div class="container">
    <div class="flex justify-center items-center min-h-screen">
      <router-view :username="username" />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import store from "@/store";
import { useSetTitle } from "@/use/setTitle";
import NavLinks from "@/components/home/NavLinks.vue";
import AppName from "@/components/ui/AppName.vue";
export default {
  name: "HomeLayout",
  setup() {
    useSetTitle();
    const user = computed(() => store.getters["auth/user"]);
    const email = computed(() => (user.value ? user.value.email : null));
    const username = computed(() => (user.value ? user.value.name : null));
    return {
      username,
      email,
    };
  },
  components: {
    NavLinks,
    AppName,
  },
};
</script>
