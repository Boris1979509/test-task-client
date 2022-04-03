<template>
  <h2 class="text-center">
    {{ $t("Welcome", { name: username }) }}
  </h2>
</template>

<script>
export default {
  name: "Home",
  props: {
    username: {
      type: String,
    },
  },
};
</script>
