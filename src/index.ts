import { App } from 'vue'
import maska from 'maska'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import * as components from './components'

library.add(fas)

function install(app: App) {
	for (const key in components) {
		app.use(maska)
		app.component('font-awesome-icon', FontAwesomeIcon)
		// @ts-expect-error
		app.component(key, components[key])
	}
}

import './assets/main.scss'

export default { install }

export * from './components'
