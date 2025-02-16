import VConsole from 'vconsole'
import { CustomFunction } from './types'

class VConsoleFunctionPlugin {
	private vConsole: VConsole

	private functions: CustomFunction[] = []

	constructor (vConsole: VConsole, functions: CustomFunction[]) {
		this.vConsole = vConsole
		this.functions = functions
		this.init()
	}

	private init () {
		const plugin = new VConsole.VConsolePlugin('customFunction', 'Function Logger')

		plugin.on('init', () => {
			console.log('Vconsole customFunction plugin init done.')
		})

		plugin.on('renderTab', (callback: (html: string) => void) => {
			let html = '<table style="width: 100%; border-collapse: collapse; text-align: center;">'
			html +=
				'<tr><th style="padding: 10px;">Function Name</th><th style="padding: 10px;">Trigger</th></tr>'
			this.functions.forEach(({ name }, index) => {
				html += `<tr>
		      <td style="padding: 10px;">${name}</td>
		      <td style="padding: 10px;"><button id="fn-trigger-${index}" style="padding: 5px 10px;">Run</button></td>
		    </tr>`
			})
			html += '</table>'

			callback(html)

			this.functions.forEach(({ callback }, index) => {
				const btn = document.getElementById(`fn-trigger-${index}`)
				if (btn) {
					btn.addEventListener('click', callback)
				}
			})
		})

		this.vConsole.addPlugin(plugin)

		return plugin
	}
}

export default VConsoleFunctionPlugin
