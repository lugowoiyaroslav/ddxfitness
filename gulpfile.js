'use strict';

global.$ = {

	gulp: require('gulp'),
	gp:   require('gulp-load-plugins')(),
	bs:   require('browser-sync').create(),

	path: {

		tasks: require('./params/config/tasks.js')
	}

};

$.path.tasks.forEach(function(taskPath){

	require(taskPath)();

});

$.gulp.task('default', $.gulp.series(
	$.gulp.parallel('pug','svg','img','sass','scripts:lib', 'scripts','fonts'),
	$.gulp.parallel('watch', 'server')
));

