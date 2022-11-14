let mix = require('laravel-mix');
require('mix-tailwindcss');
require('mix-html-builder');

mix
	.html({
		htmlRoot: './src/index.html',
		output: 'docs',
		partialRoot: './src/partials',
		layoutRoot: './src/layouts',
		minify: {
			removeComments: true
		}
	})
	.js('src/js/app.js', 'docs/js/scripts.js')
	.sass('src/scss/app.scss', 'docs/css/styles.css')
	.tailwind();



if (mix.inProduction()) {
	mix.version();
} else {
	mix.sourceMaps().webpackConfig({ devtool: 'inline-source-map' });
	mix.browserSync({
		server: {
			baseDir: "./docs",
		},
		files: ['docs/*.html', 'docs/css/styles.css', 'docs/js/scripts.js'],
		notify: false
	});
}

mix.disableSuccessNotifications();