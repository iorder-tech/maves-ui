<template>
	<span class="list-item-title">{{ text }}</span>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps<{
	text: string
}>()
</script>

<style scoped lang="scss">
.list-item-title {
	color: #565360;
	font-size: 14px;
	font-weight: 500;
}
</style>
