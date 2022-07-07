import gulp from 'gulp';
import del from 'del';
import webpack from 'webpack-stream';

global.app = {
  path: {
    src: './src/theme/index.ts',
    build: './build/',
  },
  gulp,
};

const copy = () => {
  return app.gulp.src(app.path.src).pipe(app.gulp.dest(app.path.build));
};

const reset = () => {
  return del(app.path.build);
};

const js = () => {
  return app.gulp.src(app.path.src)
    .pipe(
      webpack({
        mode: 'development',
        output: {
          filename: 'index.ts',
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build));
};

gulp.task('default', js);
