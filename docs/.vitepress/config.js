const path = require('path')

module.exports = {
	title: 'Mavis UI',
	description: 'Just playing around.',
	base: '/mavis-ui/',
	lastUpdated: true,
	titleTemplate: 'Mavis UI - %s',
	themeConfig: {
		repo: 'https://github.com/wuruoyun/vue-component-lib-starter',
		sidebar: [
			{
				text: 'Introdution',
				items: [
					{ text: 'What is Mavis UI?', link: '/' },
					{ text: 'Getting Started', link: '/guide/' },
				],
			},
			{
				text: 'Components',
				items: [
					{ text: 'Button', link: '/components/button' },
					{ text: 'Card', link: '/components/card' },
					{ text: 'Lists', link: '/components/lists' },
					{ text: 'Nav Bar', link: '/components/navbar' },
					{ text: 'Text Field', link: '/components/textfield' },
					{ text: 'Typography', link: '/components/typography' },
					{ text: 'Navigation Drawer', link: '/components/navigationdrawer' },
				],
			},
		],
	},
	vite: {
		ssr: {
			noExternal: ['@fortawesome/*'],
		},
		resolve: {
			alias: {
				'mavis-ui': path.resolve(__dirname, '../../src'),
			},
		},
	},
}
