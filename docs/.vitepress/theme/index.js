import DefaultTheme from 'vitepress/theme'
import PrimeVue from 'primevue/config'
import DemoContainer from '../components/DemoContainer.vue'
import MavisUi from 'mavis-ui'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import './custom.css'

export default {
	...DefaultTheme,
	async enhanceApp({ app }) {
		app.use(PrimeVue)
		app.use(MavisUi)
		app.component('DemoContainer', DemoContainer)
	},
}
