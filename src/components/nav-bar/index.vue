<template>
	<div class="navbar">
		<m-card class="navbar__content">
			<div class="profile">Olá, Rafael</div>
		</m-card>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue'

	const props = defineProps<{
		app?: boolean
	}>()

	const width = computed(() =>
		props.app ? 'calc(100% - var(--drawer-size))' : '100%'
	)
</script>

<style lang="scss" scoped>
	.navbar {
		position: fixed;
		padding-top: 20px;
		padding-left: 20px;
		padding-right: 20px;
		/* width: v-bind(width); */
		right: 0;
		top: 0;
		&__content {
			display: flex;
			justify-content: flex-end;
		}
	}
</style>
