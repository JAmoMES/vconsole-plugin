# Promise until tired

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![ts](https://badgen.net/badge/Built%20With/TypeScript/blue) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

```
yarn add vconsole-plugin-custom-function
```

### Usage

```ts
import VConsoleFunctionPlugin from 'vconsole-plugin-custom-function'

new VConsoleFunctionPlugin(window.vConsole, [
	{
		name: 'log',
		callback: () => console.log('234'),
	},
	// your custom function
])
```
