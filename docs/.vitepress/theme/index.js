import DefaultTheme from 'vitepress/theme'
import DemoContainer from '../components/DemoContainer.vue'
import MavisUi from 'mavis-ui'
import './custom.css'

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		app.use(MavisUi)
		app.component('DemoContainer', DemoContainer)
	},
}
