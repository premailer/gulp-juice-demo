import del from 'del';
import gutil from 'gulp-util';

const clean = done => {
  return del([
    'mail/*.html',
    'src/mail/stylesheets/*.css'
  ]).then(() => {
    gutil.log(gutil.colors.green('Delete src/mail/stylesheets/*.css and mail/*.html'));
    done();
  });
};

export default clean;
