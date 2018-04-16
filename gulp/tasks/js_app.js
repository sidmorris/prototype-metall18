module.exports = function(){
 $.gulp.task('js:app', function () {
  return $.gulp.src('source/js/app.js')
    .pipe($.gp.sourcemaps.init())
    .pipe($.gp.concat('app.js'))
    .pipe($.gp.sourcemaps.write())
    .pipe($.gulp.dest($.PATH.ROOT + '/assets/js'))
});
};