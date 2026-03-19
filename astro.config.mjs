// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightCatppuccin from '@catppuccin/starlight'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			components: {
				Footer: './src/components/footer.astro'
			},
			lastUpdated: true,
			plugins: [starlightCatppuccin({
				dark: { flavor: "mocha", accent: "sapphire" },
				light: { flavor: "latte", accent: "sapphire" },
			})],
			title: 'Cruise',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/cruise-org/cruise' }],
			sidebar: [
				{ label: 'Getting Started', link: '/get-started' },
				{ label: 'Installation', link: '/install' },
				{
					label: 'Configuration',
					items: [
						{ label: 'Overview', link: '/config' },
						{ label: 'General', link: '/config/general' },
						{ label: 'Keybinds', link: '/config/keybinds' },
						{ label: 'Styles', link: '/config/styles' },
					],
				},
				{ label: 'Contributing', link: '/contributing' },
				{
					label: 'Development',
					items: [
						{ label: 'Overview', link: '/dev' },
						{ label: 'Architecture', link: '/dev/architecture' },
						{ label: 'Interfaces', link: '/dev/interfaces' },
					],
				},
			],
		}),
	],
});
