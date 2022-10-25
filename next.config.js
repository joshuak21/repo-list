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

	pageExtensions: [
		'page.tsx', // page route
	]
}

module.exports = nextConfig
