<template>
	<h1 class="h1" v-if="type === 'h1'" :style="style"><slot /></h1>
	<h2 class="h2" v-if="type === 'h2'" :style="style"><slot /></h2>
	<h3 class="h3" v-if="type === 'h3'" :style="style"><slot /></h3>
	<p class="subtitle" v-if="type === 'subtitle'" :style="style"><slot /></p>
	<p class="subtitle2" v-if="type === 'subtitle2'" :style="style"><slot /></p>
	<p class="body" v-if="type === 'body'" :style="style"><slot /></p>
	<p class="description" v-if="type === 'description'" :style="style">
		<slot />
	</p>
	<span class="caption" v-if="type === 'caption'" :style="style">
		<slot
	/></span>
</template>

<script setup lang="ts">
	import { computed } from 'vue'

	const { fontWeight, color, marginTop, marginBottom } = withDefaults(
		defineProps<{
			type:
				| 'h1'
				| 'h2'
				| 'h3'
				| 'subtitle'
				| 'subtitle2'
				| 'body'
				| 'description'
				| 'caption'
			fontWeight: string
			color: string
			marginTop: string
			marginBottom: string
		}>(),
		{
			type: 'h1',
			fontWeight: '500',
			color: 'black',
			marginTop: '0',
			marginBottom: '0',
		}
	)

	const style: any = computed(() => ({
		fontWeight,
		color,
		marginTop,
		marginBottom,
	}))
</script>

<style scoped lang="scss">
	.default {
	}
	.h1 {
		font-size: 2.5em;
		font-weight: 600;
	}
	.h2 {
		font-size: 2em;
		font-weight: 600;
	}
	.h3 {
		font-size: 2em;
		font-weight: 700;
	}
	.subtitle {
		font-size: 1.25em;
		font-weight: 600;
	}
	.subtitle2 {
		font-size: 1em;
		font-weight: 600;
	}
	.body {
		font-size: 1em;
		font-weight: 500;
	}
	.description {
		font-size: 0.875em;
		font-weight: 500;
	}
	.caption {
		font-size: 0.75em;
		font-weight: 500;
	}
</style>
