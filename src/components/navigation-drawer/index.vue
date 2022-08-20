<template>
	<div class="navigation-drawer">
		<Transition name="fade">
			<div class="navigation-drawer--overlay" v-if="modelValue" />
		</Transition>
		<Transition name="slide">
			<div
				class="navigation-drawer__content"
				v-if="modelValue"
				:style="contentStyles"
			>
				<div
					class="navigation-drawer__content__header"
					v-if="title || closeButton"
				>
					<m-typography type="h3" v-if="title">{{ title }}</m-typography>

					<m-button
						type="ghost"
						icon
						iconName="fa-solid fa-circle-xmark"
						v-if="closeButton"
						:radius="50"
						height="48px"
					/>
				</div>
				<slot />
			</div>
		</Transition>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue'

	const { padding } = defineProps<{
		modelValue: boolean
		location: 'left' | 'right'
		title?: string
		closeButton?: boolean
		padding?: string
	}>()

	const contentStyles = computed(() => ({
		padding: padding || 0,
	}))
</script>

<style lang="scss" scoped>
	.navigation-drawer {
		position: absolte;
		top: 0;
		left: 0;
		height: 100%;
		&--overlay {
			background: rgba(0, 0, 0, 0.5);
			position: absolute;
			right: inherit;
			width: 100%;
			height: 100%;
			translate: all 0.2s ease;
		}
		&__content {
			position: absolute;
			background: var(--base-background-white);
			overflow-y: scroll;
			z-index: 9;
			height: 100%;
			width: 450px;
			transition: all 0.3s ease-in-out;
			&__header {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}
	}

	.slide-enter-active,
	.slide-leave-active {
		transform: translateX(-100%);
	}
	.slide-enter,
	.slide-leave-to {
		transform: translateX(-100%);
	}
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.1s;
	}
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
</style>
