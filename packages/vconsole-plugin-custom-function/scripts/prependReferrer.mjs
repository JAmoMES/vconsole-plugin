import fs from 'node:fs'
import path from 'node:path'

const filePath = path.resolve('dist', 'index.d.ts')
const referrer = '/// <reference types="global.d.ts" />'

const prependReferrer = () => {
	if (fs.existsSync(filePath)) {
		const existingContent = fs.readFileSync(filePath, 'utf-8')
		const updatedContent = `${referrer}\n\n${existingContent}`
		fs.writeFileSync(filePath, updatedContent, 'utf-8')
		console.log('Referrer information added to index.d.ts')
	} else {
		console.error(`File not found: ${filePath}`)
	}
}

prependReferrer()
