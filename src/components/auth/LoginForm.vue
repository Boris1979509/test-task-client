<template>
  <div class="flex items-center pb-5">
    <app-icon icon="lock-open" class="w-6 h-6" />
    <h2>{{ $t("Login") }}</h2>
  </div>
  <form @submit.prevent="onSubmit" class="space-y-8">
    <app-input
      :isActiveFocus="isActiveFocus"
      label="Email"
      type="email"
      name="email"
      v-model.trim="email"
      :error-message="errors.email"
    />
    <app-input
      label="Password"
      type="password"
      name="password"
      v-model.trim="password"
      :error-message="errors.password"
    />
    <app-button :isButtonLoading="isButtonLoading">{{
      $t("Login")
    }}</app-button>
  </form>
  <div class="auth-subform">
    <router-link
      :to="{ name: 'signup' }"
      class="text-sm hover:underline"
      v-text="$t('Signup')"
    ></router-link>
  </div>
</template>

<script>
import { useAuthLogin } from "@/use/auth/login";

export default {
  name: "LoginForm",
  setup() {
    return { ...useAuthLogin() };
  },
};
</script>
