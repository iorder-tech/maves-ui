<template>
	<div class="text-field">
		<div class="text-field__label" v-if="label">{{ label }}</div>
		<div class="text-field__content" :style="styles">
			<div class="text-field__content--icon" v-if="icon">
				<icon :icon="icon" />
			</div>
			<input
				@input="updateValue"
				v-maska="mask"
				:disabled="disabled"
				:maxLength="maxLength"
				:value="modelValue"
				:placeholder="placeholder"
			/>
		</div>
		<p class="text-field__error--message" v-if="error">{{ errorMessage }}</p>
		<div class="text-field__count" v-if="count">{{ countValue }}</div>
	</div>
</template>

<script setup lang="ts">
	import { Ref, ref, computed } from 'vue'

	const { placeholderColor, maxLength, error } = defineProps<{
		placeholder?: string
		modelValue?: string
		label?: string
		count?: boolean
		maxLength?: number
		icon?: string
		mask?: string
		placeholderColor?: string
		disabled?: boolean
		error?: boolean
		errorMessage?: string
	}>()

	const emit = defineEmits(['update:modelValue'])

	const text: Ref<string> = ref('')

	const updateValue = (e: Event) => {
		text.value = (e.target as HTMLInputElement).value
		emit('update:modelValue', (e.target as HTMLInputElement).value)
	}

	const countValue = computed(
		() => `${text.value.length}/${maxLength} caracteres`
	)

	const background = computed(() =>
		error
			? 'var(--base-error-background-color)'
			: 'var(--input-background-color)'
	)

	const styles = computed(() => ({
		background: background.value,
	}))
</script>

<style scoped lang="scss">
	.text-field {
		width: 100%;
		&__content {
			display: flex;
			align-items: center;
			height: 40px;
			border-radius: 5px;
			flex: 1;
			input {
				border: 0;
				background: transparent;
				outline: none;
				height: 100%;
				padding-left: 10px;
				padding-right: 10px;
				width: 100%;
				&::placeholder {
					/* color: v-bind(placeholderColor); */
					opacity: 1;
				}
				&::-ms-input-placeholder {
					/* color: v-bind(placeholderColor); */
				}
				&:disabled {
					color: var(--app-light02-color);
				}
			}
			&--icon {
				padding-left: 10px;
				display: flex;
				align-items: center;
			}
		}
		&__label {
			font-size: 12px;
			margin-bottom: 4px;
		}
		&__count {
			text-align: right;
		}
		&__error {
			&--message {
				font-size: 12px;
				margin-top: 4px;
				color: var(--base-error-color);
			}
		}
	}
</style>
