<template>
	<div class="navigation-drawer">
		<Transition name="fade">
			<div class="navigation-drawer--overlay" v-if="modelValue" />
		</Transition>
		<Transition name="slide">
			<div class="navigation-drawer__content" v-if="modelValue"><slot /></div>
		</Transition>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps<{
		modelValue: boolean
		location: 'left' | 'right'
	}>()

	const position = props.location === 'right' ? 0 : 'inherit'
	const animation = props.location === 'left' ? '-100%' : '100%'
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
			/* right: v-bind(position); */
			width: 100%;
			height: 100%;
			translate: all 0.2s ease;
		}
		&__content {
			position: absolute;
			background: var(--base-background-white);
			z-index: 9;
			height: 100%;
			width: 450px;
			transition: all 0.3s ease-in-out;
		}
	}

	.slide-enter-active,
	.slide-leave-active {
		/* transform: translateX(v-bind(animation)); */
	}
	.slide-enter,
	.slide-leave-to {
		/* transform: translateX(v-bind(animation)); */
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
