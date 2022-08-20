<template>
	<button class="btn" :disabled="disabled" :style="styles">
		<!-- <Icon :name="iconName" v-if="iconName" /> -->
		<slot v-if="!icon" />
	</button>
</template>

<script setup lang="ts">
	import { computed } from 'vue'

	const { type, icon, maxWidth } = defineProps<{
		type: 'primary' | 'ghost'
		disabled?: boolean
		iconName?: string
		icon?: boolean
		maxWidth?: string
	}>()

	const background = computed(() => {
		let bg = '--base-color-primary'

		if (type === 'primary') bg = '--base-color-primary'
		if (type === 'ghost') bg = '--base-color-transparent'

		return `var(${bg})`
	})

	const color = computed(() => {
		let colorRes = '--base-text-color-white'

		if (type === 'primary') colorRes = '--base-text-color-white'
		if (type === 'ghost') colorRes = '--app-primary-color'

		return `var(${colorRes})`
	})

	const width = computed(() => {
		let widthStyle = '100%'

		if (icon) widthStyle = '48px'

		return widthStyle
	})

	const iconMarginRight = computed(() => (icon ? '0' : '8px'))
	const styles = computed(() => ({
		width: width.value,
		marginRight: iconMarginRight.value,
		background: background.value,
		color: color.value,
	}))
</script>

<style lang="scss" scoped>
	.btn {
		height: 42px;
		border: 1px solid transparent;
		border-radius: 4px;
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: 0.2s all;
		&:disabled {
			background: var(--app-dark03-color);
		}
		&:active {
			transform: scale(0.99);
		}
		svg {
			/* margin-right: v-bind(iconMarginRight); */
		}
	}
</style>
>
