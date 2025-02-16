import VConsole from 'vconsole'
import VConsoleFunctionPlugin from '.'

declare global {
	// eslint-disable-next-line no-unused-vars
	interface Window {
		vConsole: VConsole
		vconsoleFunctionPlugin: VConsoleFunctionPlugin
	}
}

export {}
