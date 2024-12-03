import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: "TechWave Docs",
	tagline: "The best docs around",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://LucaMonetti.github.io",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/docsTryout/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "LucaMonetti", // Usually your GitHub org/user name.
	projectName: "docsTryout", // Usually your repo name.
	deploymentBranch: "gh-pages",
	trailingSlash: false,

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "it",
		locales: ["it"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					exclude: ["**/private/**"],
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	plugins: [
		[
			"@lunaticmuch/docusaurus-terminology",
			{
				termsDir: "./docs/RTB/Termini",
				termsUrl: "/docs/RTB/Termini",
				glossaryFilepath: "./docs/RTB/Glossario.md",
			}
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/logo.png",
		navbar: {
			title: "TechWave",
			logo: {
				alt: "TechWave Logo",
				src: "img/logo.png",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "aumaticSidebar",
					position: "left",
					label: "Documentazione",
				},
			],
		},
		footer: {
			style: "dark",
			// links: [
			// 	{
			// 		title: "Docs",
			// 		items: [
			// 			{
			// 				label: "Docs",
			// 				to: "/docs/intro",
			// 			},
			// 		],
			// 	},
			// 	{
			// 		title: "Community",
			// 		items: [
			// 			{
			// 				href: "https://github.com/LucaMonetti/docsTryout",
			// 				label: "GitHub",
			// 			},
			// 		],
			// 	},
			// 	{
			// 		title: "More",
			// 		items: [
			// 			{
			// 				href: "https://github.com/LucaMonetti/docsTryout",
			// 				label: "GitHub",
			// 			},
			// 		],
			// 	},
			// ],
			copyright: `Copyright © ${new Date().getFullYear()} TechWave Docs, Inc. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
