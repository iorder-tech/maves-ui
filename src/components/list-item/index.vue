<template>
	<li class="list-item"><slot /></li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{}>()
</script>

<style scoped lang="scss">
.list-item {
	display: flex;
	align-items: center;
	width: 100%;
	transition: 0.3s;
	padding-left: 15px;
	cursor: pointer;
	margin-bottom: 5px;
	display: flex;
	align-items: center;
	height: 42px;
}
</style>
