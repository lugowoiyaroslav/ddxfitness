module.exports = function(){

	$.gulp.task('watch', function() {

	$.gulp.watch('src/pug/**/*.pug',$.gulp.series('pug')),
	$.gulp.watch('src/static/sass/**/*.sass',$.gulp.series('sass')),
	$.gulp.watch('src/static/img/svg/*.svg', $.gulp.series('svg')),
	$.gulp.watch('src/static/img/*.{png,jpg,gif}', $.gulp.series('img')),
	$.gulp.watch('src/static/js/main.js',$.gulp.series('scripts'))

});
}