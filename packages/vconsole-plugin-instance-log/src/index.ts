class VConsoleProxyPlugin {
	constructor(vconsole: any, options: { watchInstance: object; static: boolean }) {
		if (options.static) {
			this.proxyStaticMethods(options.watchInstance)
		} else {
			this.proxyInstanceMethods(options.watchInstance)
		}
	}

	proxyInstanceMethods(instance: any) {
		const className = instance.constructor.name

		Object.getOwnPropertyNames(Object.getPrototypeOf(instance)).forEach(method => {
			if (typeof instance[method] === 'function' && method !== 'constructor') {
				const originalMethod = instance[method]

				instance[method] = (...args: any[]) => {
					console.log(`[Proxy ${className}] ${method} called with:`, args)
					const result = originalMethod.apply(instance, args)
					console.log(`[Proxy ${className}] ${method} returned:`, result)
					return result
				}
			}
		})

		console.log(`[VConsole Proxy] Watching instance of ${className}`)
	}

	proxyStaticMethods(Class: any) {
		const className = Class.name

		Object.getOwnPropertyNames(Class).forEach(key => {
			const descriptor = Object.getOwnPropertyDescriptor(Class, key)

			// Skip non-function properties (like static variables)
			if (!descriptor || typeof Class[key] !== 'function') return

			const originalMethod = Class[key]

			Class[key] = (...args: any[]) => {
				console.log(`[Proxy ${className}] ${key} called with:`, args)
				const result = originalMethod.apply(Class, args)

				result
					.then((res: any) => {
						console.log(`[Proxy ${className}] ${key} returned:`, res)
					})
					.catch((err: any) => {
						console.log(`[Proxy ${className}] ${key} error:`, err)
					})

				return result
			}
		})

		console.log(`[VConsole Proxy] Watching static methods of ${className}`)
	}
}

export default VConsoleProxyPlugin
