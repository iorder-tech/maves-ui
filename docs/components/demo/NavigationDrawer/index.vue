<template>
	<m-card style="position: relative; overflow: hidden; height: 500px">
		<m-button @click="drawer = !drawer">{{
			drawer ? 'Close Drawer' : 'Open Drawer'
		}}</m-button>
		<m-navigation-drawer
			v-model="drawer"
			location="left"
			title="Pedido"
			closeButton
			padding="24px 40px"
		>
			Test
		</m-navigation-drawer>
	</m-card>
</template>

<script setup lang="ts">
	import { ref, Ref } from 'vue'

	const drawer: Ref<boolean> = ref(false)
</script>
