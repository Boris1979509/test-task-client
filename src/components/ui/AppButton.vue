<template>
    <button :class="['btn group', 'btn-' + color]" :type="type" ref="btn">
        <template v-if="isButtonLoading">
            <div class="btn-loader group-hover:border-white"></div>
            <span>{{ $t('Loading') }}</span>
        </template>
        <template v-else>
            <slot />
        </template>
    </button>
</template>

<script>
import { ref, watch } from 'vue'

export default {
    name: 'AppButton',
    props: {
        color: {
            type: String,
            default: 'primary',
            validate(value) {
                return ['primary', 'success', 'danger', 'warning'].includes(
                    value
                )
            },
        },
        isButtonLoading: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: 'submit',
        },
    },
    setup(props) {
        const btn = ref(null)
        watch(
            () => props.isButtonLoading,
            (value) => {
                value
                    ? (btn.value.disabled = value)
                    : btn.value.removeAttribute('disabled')
            }
        )
        return {
            btn,
        }
    },
}
</script>
