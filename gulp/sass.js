const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function serve() {
    browserSync.init({
        server: "./src/"
    });

    gulp.watch('./src/sass/*.scss', gulp.series(sass));
    gulp.watch('./src/*.html').on('change', browserSync.reload);
}

function sass() {
    return gulp.src('./src/sass/style.scss')
        .pipe(gulpSass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./src/styles'))
        .pipe(browserSync.stream());
}

module.exports = serve;