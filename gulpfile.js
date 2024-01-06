import gulp from 'gulp';
import rename from 'gulp-rename';
import svgstore from 'gulp-svgstore';

const spriteProject = () =>
{
  return gulp.src(`src/assets/svg/sprite/*.svg`)
      .pipe(svgstore({
      }))
      .pipe(rename('sprite.svg'))
      .pipe(gulp.dest(`src/assets/svg/`));
};

gulp.task('svgSprite', async function()
{
  spriteProject();
});
