<template>
  <nav class="fixed bg-white border-b inset-x-0 z-10">
    <div class="mx-auto px-4">
      <div class="flex items-center h-10">
        <slot />
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "AppNavbar",
};
</script>
