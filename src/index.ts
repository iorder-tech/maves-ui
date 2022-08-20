import { App } from 'vue'
import maska from 'maska'

import * as components from './components'

function install(app: App) {
	for (const key in components) {
		app.use(maska)
		// @ts-expect-error
		app.component(key, components[key])
	}
}

import './assets/main.scss'

export default { install }

export * from './components'
