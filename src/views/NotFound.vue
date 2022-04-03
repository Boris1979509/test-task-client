<template>
  <div class="container h-screen flex flex-col justify-center">
    <h2 class="text-center text-red-500">{{ $t("404 - Page not found") }}</h2>
  </div>
</template>

<script>
import { useSetTitle } from "@/use/setTitle";
export default {
  name: "NotFound",
  setup() {
    useSetTitle();
    return {};
  },
};
</script>
