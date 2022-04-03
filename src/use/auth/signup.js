import { ref } from "vue";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

export const useAuthSignup = () => {
  const { t } = useI18n(); // translate
  const store = useStore();
  const router = useRouter();
  const isButtonLoading = ref(false);
  const isActiveFocus = ref(true);
  const agree = ref(true);

  const PASSWORD_MIN_LENGTH = 6;
  const NAME_MIN_LENGTH = 2;
  const MAX_LENGTH = 255;

  const validationSchema = yup.object({
    name: yup
      .string()
      .required(t("Required", { name: t("Name") }))
      .min(NAME_MIN_LENGTH, t("Min", { name: t("Name"), min: NAME_MIN_LENGTH }))
      .max(MAX_LENGTH, t("Max", { name: t("Name"), max: MAX_LENGTH })),
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
      .max(MAX_LENGTH, t("Max", { name: t("Password"), max: MAX_LENGTH })),
    password_confirmation: yup
      .string()
      .required(t("Required", { name: t("Confirm password") }))
      .oneOf([yup.ref("password")], t("Passwords must match")),
  });

  const { errors, handleSubmit } = useForm({
    validationSchema,
  });
  const { value: name } = useField("name");
  const { value: password } = useField("password");
  const { value: email } = useField("email");
  const { value: password_confirmation } = useField("password_confirmation");

  const onSubmit = handleSubmit(async (data, actions) => {
    if (!agree.value) return;

    try {
      isButtonLoading.value = true;
      await store.dispatch("auth/signup", data);
      router.push({ name: "login" });
      //resetForm();
    } catch ({ errors }) {
      actions.setErrors(errors);
    } finally {
      isButtonLoading.value = false;
    }
  });

  return {
    onSubmit,
    agree,
    name,
    email,
    password,
    password_confirmation,
    errors,
    isActiveFocus,
    isButtonLoading,
  };
};
