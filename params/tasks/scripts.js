module.exports = function(){

	$.gulp.task('scripts:lib', function() {

	return $.gulp.src(['node_modules/jquery/dist/jquery.min.js',
		'node_modules/svg4everybody/dist/svg4everybody.min.js',
		'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js',
		'node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js',
		'node_modules/slick-carousel/slick/slick.min.js',
		'node_modules/jquery.maskedinput/src/jquery.maskedinput.js'
		])
	       .pipe($.gp.concat('libs.min.js'))
	       .pipe($.gulp.dest('build/static/js'))
	       .pipe($.bs.reload({

	       	   stream: true

	       }));
});
	$.gulp.task('scripts', function() {

	return $.gulp.src('src/static/js/main.js')
	       .pipe($.gulp.dest('build/static/js'))
	       .pipe($.bs.reload({

	       	   stream: true

	       }));
});
}