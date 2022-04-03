<template>
  <app-dropdown icon="dots-vertical" :label="email">
    <home-dropdown-items />
  </app-dropdown>
</template>

<script>
import HomeDropdownItems from "@/components/home/HomeDropdownItems.vue";

export default {
  name: "NavLinks",
  props: {
    email: {
      type: String,
    },
  },
  components: {
    HomeDropdownItems,
  },
};
</script>
