<template>
  <div class="app-name">
    {{ appName }}
  </div>
</template>
<script>
export default {
  name: "AppNavbar",
  setup() {
    const appName = import.meta.env.VITE_APP_NAME || "App";
    return {
      appName,
    };
  },
};
</script>
