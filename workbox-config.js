module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{ico,webp,svg,woff,eot,ttf}'
	],
	swDest: 'public/service-worker.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};