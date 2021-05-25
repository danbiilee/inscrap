module.exports = {
	syntax: 'postcss-scss',
	modules: true,
	plugins: [
		require('postcss-normalize'),
		require('autoprefixer'),
		require('postcss-fail-on-warn'),
	],
};
