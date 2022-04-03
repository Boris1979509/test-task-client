<template>
  <app-toast />
  <component v-if="layout" :is="layout + '-layout'" />
  <template v-else>
    <router-view />
  </template>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import AuthLayout from "@/components/layouts/AuthLayout.vue";
import HomeLayout from "@/components/layouts/HomeLayout.vue";
export default {
  name: "App",
  setup() {
    const route = useRoute();
    const layout = computed(() => route.meta.layout);

    return { layout };
  },
  components: { AuthLayout, HomeLayout },
};
</script>
