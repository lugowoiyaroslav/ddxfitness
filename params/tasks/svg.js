module.exports = function() {
    var svgSprite = require("gulp-svg-sprites");
 
$.gulp.task('svg', function () {
    return $.gulp.src('./src/static/img/svg/*.svg')
         .pipe($.gp.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
         .pipe($.gp.cheerio({
                run: function($) {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                },
                parserOptions: { xmlMode: true }
           }))
          .pipe($.gp.replace('&gt;', '>'))
          .pipe(svgSprite({mode: "symbols"}))
          .pipe($.gulp.dest('./build/static/img/'));
});
};
