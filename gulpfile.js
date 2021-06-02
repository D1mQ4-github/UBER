const gulp = require('gulp');
const sass = require('./gulp/sass');

module.exports.start = gulp.series(sass);