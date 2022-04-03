import { ref, computed } from "vue";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

export const useAuthLogin = () => {
  const { t } = useI18n(); // translate
  const store = useStore();
  const router = useRouter();
  const isButtonLoading = ref(false);
  const isActiveFocus = ref(true);
  const PASSWORD_MIN_LENGTH = 6;
  const PASSWORD_MAX_LENGTH = 255;

  const validationSchema = yup.object({
    email: yup
      .string()
      .required(t("Required", { name: "Email" }))
      .email(t("Valid email")),
    password: yup
      .string()
      .required(t("Required", { name: t("Password") }))
      .min(
        PASSWORD_MIN_LENGTH,
        t("Min", { name: t("Password"), min: PASSWORD_MIN_LENGTH })
      )
      .max(
        PASSWORD_MAX_LENGTH,
        t("Max", { name: t("Password"), max: PASSWORD_MAX_LENGTH })
      ),
  });

  const { errors, handleSubmit, resetForm } = useForm({
    validationSchema,
  });

  const { value: password } = useField("password");
  const { value: email } = useField("email");

  const onSubmit = handleSubmit(async (data, actions) => {
    try {
      isButtonLoading.value = true;
      await store.dispatch("auth/login", data);
      //resetForm();
    } catch ({ errors }) {
      actions.setErrors(errors);
    } finally {
      isButtonLoading.value = false;
    }
  });

  store.watch(
    (_, getters) => getters["auth/isLoggedIn"],
    (value) => {
      if (value) router.push({ name: "home" });
    }
  );
  return { onSubmit, email, password, errors, isActiveFocus, isButtonLoading };
};
