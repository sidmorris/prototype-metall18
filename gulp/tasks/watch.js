module.exports = function(){
$.gulp.task('watch', function () {
  $.gulp.watch('source/js/**/*.js', $.gulp.series('js:app'));
  $.gulp.watch('source/style/**/*.scss', $.gulp.series('sass'));
  // $.gulp.watch(['build/assets/css/app.css', 'build/**/*.html'], $.gulp.series('uncss')); //uncoment in dev
  $.gulp.watch('source/template/**/*.pug', $.gulp.series('pug'));
  $.gulp.watch('source/images/**/*.*', $.gulp.series('copy:image'));
});
};