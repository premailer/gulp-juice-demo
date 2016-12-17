'use strict';

import gulp from 'gulp';
import pug from 'gulp-pug';
import rename from 'gulp-rename';
import juice from 'premailer-gulp-juice';

const templatesPath = 'src/mail';
const mailPath = 'mail';

const templatesGlob = templatesPath + '/**/*.pug';

const mailTemplates = () => {
  return gulp.src(templatesGlob)
    .pipe(rename(path => {
      path.extname = '.html';
    }))
    .pipe(pug({
      client: false
    }))
    .pipe(juice({
      webResources: {
        relativeTo: templatesPath,
        images: 100,
        strict: true
      }
    }))
    .pipe(gulp.dest(mailPath));
};

export default mailTemplates;
