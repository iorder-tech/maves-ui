<template>
	<div class="content">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
.content {
	width: calc(100% - var(--drawer-width));
	height: 100%;
	display: flex;
	align-self: flex-end;
	margin-left: var(--drawer-size);
	padding-top: 100px;
	padding-left: 20px;
	padding-right: 20px;
}
</style>
