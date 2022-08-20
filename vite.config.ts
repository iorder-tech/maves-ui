const path = require('path')
const { defineConfig } = require('vite')
import vue from '@vitejs/plugin-vue'

module.exports = defineConfig({
	plugins: [vue()],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'mavis-ui',
			formats: ['es'],
			fileName: (format) => `mavis-ui.${format}.js`,
		},
		rollupOptions: {
			external: ['vue', /primevue\/.+/],
			output: {
				exports: 'named',
				globals: {
					vue: 'Vue',
				},
			},
		},
		emptyOutDir: false,
	},
})
