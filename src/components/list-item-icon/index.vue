<template>
	<div class="list-item-icon">
		<Icon :name="name" :size="size" :color="color" />
	</div>
</template>

<script lang="ts" setup>
withDefaults(
	defineProps<{
		name: string
		size?: number
		color?: string
	}>(),
	{
		size: 18,
		color: 'black',
	}
)
</script>

<style lang="scss" scoped>
.list-item-icon {
	margin-right: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
