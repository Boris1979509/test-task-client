<template>
  <ul class="list-none overflow-hidden py-2">
    <li>
      <Logout />
    </li>
  </ul>
</template>

<script>
import Logout from "@/components/auth/Logout.vue";
export default {
  name: "HomeDropdownItems",
  components: {
    Logout,
  },
};
</script>
