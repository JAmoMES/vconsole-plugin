import type { Plugin } from 'vite'
import type { VConsoleCopyIconSizePluginOptions } from './types'

export default function VConsoleCopyIconSizePlugin({
	iconSize = 20,
	enable = true,
}: VConsoleCopyIconSizePluginOptions = {}): Plugin {
	return {
		name: 'vite-vconsole-plugin-icon-size',
		transformIndexHtml: (html: string) => {
			if (!enable) {
				return html
			}

			return html.replace(
				'</head>',
				`<style>
          .vc-icon .vc-icon-copy {
            width: ${iconSize}px !important;
            height: ${iconSize}px !important;
          }
					.vc-icon svg {
            width: ${iconSize} !important;
            height: ${iconSize} !important;
					}
        </style></head>`,
			)
		},
	}
}
