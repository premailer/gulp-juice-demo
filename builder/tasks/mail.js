'use strict';

import gulp from 'gulp';

import stylesheets from './mail/stylesheets';
import templates from './mail/templates';
import clean from './mail/clean';

const mail = gulp.series(clean, stylesheets, templates);

export default mail;
