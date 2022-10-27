/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,

	sassOptions: {
		includePaths: [
			path.resolve(__dirname),
		],
		indentedSyntax: false,
	},
	compiler: {
		styledComponents: true,
	},

	pageExtensions: [
		'page.js', // page and api route
		'page.tsx', // page route
		'page.ts', // api route
	],
}

module.exports = nextConfig
