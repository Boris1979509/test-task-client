<template>
  <div>
    <div :class="inputBorderState" class="border-b-2 relative my-4">
      <template v-if="isTypePassword">
        <app-icon
          :icon="icon"
          @click="switchVisibility"
          class="absolute bg-none right-0 top-[calc(100%-1.3rem)] w-5 h-5 cursor-pointer transition duration-200 ease-in-out text-gray-300 hover:text-gray-600"
        />
      </template>
      <input
        class="float-input block w-full appearance-none focus:outline-none bg-transparent"
        :type="type"
        :name="name"
        :value="modelValue"
        @input="change"
        placeholder=" "
        ref="input"
        :autocomplete="name"
      />
      <label
        v-text="$t(label)"
        :class="{ 'is-invalid': errorMessage }"
        class="float-label -z-1 text-gray-500 absolute top-0 duration-300 origin-0"
      ></label>
    </div>
    <div
      class="-mt-3 text-xs text-red-500"
      v-if="errorMessage"
      v-text="errorMessage"
    ></div>
  </div>
</template>

<script>
import { onMounted, ref, computed, toRefs } from "vue";
import { usePasswordVisibility } from "@/use/password.visibility";
export default {
  name: "AppInput",
  emits: ["update:modelValue"],
  props: {
    errorMessage: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: String,
    },
    isActiveFocus: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const input = ref(null);
    const { type, errorMessage, isActiveFocus } = toRefs(props);
    const change = (event) => {
      emit("update:modelValue", event.target.value);
    };
    const inputBorderState = computed(() =>
      errorMessage.value
        ? "border-red-300 focus-within:border-red-500"
        : "border-gray-300 focus-within:border-blue-500"
    );
    onMounted(() => {
      if (isActiveFocus.value) input.value.focus();
    });
    return {
      change,
      input,
      inputBorderState,
      ...usePasswordVisibility(type, input),
    };
  },
};
</script>
