<template>
  <div class="container">
    <div class="flex justify-center items-center min-h-screen">
      <div
        class="w-full md:w-1/2 p-5 rounded-lg shadow-lg ring-1 ring-gray-300 inset-0"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { useSetTitle } from "@/use/setTitle";
export default {
  name: "AuthLayout",
  setup() {
    useSetTitle();
    return {};
  },
};
</script>
