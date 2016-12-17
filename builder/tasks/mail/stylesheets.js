'use strict';

import gulp from 'gulp';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import less from 'gulp-less';

const stylesheetsPath = 'src/mail/stylesheets';

const stylesheetsGlob = stylesheetsPath + '/**/*.less';

const mailStylesheets = () => {
  return gulp.src(stylesheetsGlob)
    .pipe(less())
    .pipe(postcss([
      autoprefixer({browsers: ['last 2 versions']}),
    ]))
    .pipe(gulp.dest(stylesheetsPath));
};

export default mailStylesheets;
