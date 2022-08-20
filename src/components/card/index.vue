<template>
	<div class="card">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
	.card {
		background: var(--base-background-white);
		border-radius: 8px;
		box-shadow: 0px 2px 4px rgba(68, 86, 108, 0.08);
		padding: 10px;
	}
</style>
