module.exports = function(){

	$.gulp.task('sass', function() {

	return $.gulp.src('src/static/sass/main.sass')
			.pipe($.gp.sourcemaps.init())
			.pipe($.gp.sass({
			includePaths: require('node-normalize-scss').includePaths
			}))
			.pipe($.gp.autoprefixer({
			browsers: ['last 3 versions'],
			cascade: false
			}))
			.on("error", $.gp.notify.onError({
			message: "Error: <%= error.message %>",
			title: "Style"
			}))
			.pipe($.gp.csscomb())
			.pipe($.gp.csso({}))
			.pipe($.gp.sourcemaps.write())
			.pipe($.gulp.dest('build/static/css'))
			.pipe($.bs.reload({

			stream: true

		}));
});
}