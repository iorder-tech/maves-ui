const path = require('path')

module.exports = {
	title: 'Mavis UI',
	description: 'Just playing around.',
	themeConfig: {
		repo: 'https://github.com/wuruoyun/vue-component-lib-starter',
		sidebar: [
			{
				text: 'Introdution',
				children: [
					{ text: 'What is Mavis UI?', link: '/' },
					{ text: 'Getting Started', link: '/guide/' },
				],
			},
			{
				text: 'Components',
				children: [
					{ text: 'Button', link: '/components/button' },
					{ text: 'Card', link: '/components/card' },
				],
			},
		],
	},
	vite: {
		resolve: {
			alias: {
				'mavis-ui': path.resolve(__dirname, '../../src'),
			},
			dedupe: ['vue', /primevue\/.+/],
		},
	},
}
