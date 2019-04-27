//  ========================================================================  //
//  Variables
//  ========================================================================  //

// path to assets directory
var path = '';

// Browser definitions for autoprefixer
var browsers = [
  'last 3 versions',
  'ie >= 9',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

var proxy = '';

//  ========================================================================  //
//  Processes
//  ========================================================================  //

// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    del = require('del'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber');
    sourcemaps = require('gulp-sourcemaps'),
    svgSprite = require('gulp-svg-sprite');

var bounce = function () {
  gutil.beep();
  this.emit('end');
};

// Styles
gulp.task('styles', function() {
  return gulp.src(path + 'dev/scss/style.scss')
  .pipe(plumber({ errorHandler: bounce }))
  .pipe(sourcemaps.init())
  .pipe(sassGlob())
  .pipe(sass({
    outputStyle: 'expanded'
  }).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: browsers,
		cascade: false
  }))
  .pipe(gulp.dest(path + 'source/css'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(cssnano())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(path + 'source/css'))
  .pipe(notify({ message: 'Styles task complete' }));
});

// JS hint
gulp.task('jshint', function() {
  return gulp.src([path + 'dev/js/modules/**/*.js'])
  .pipe(plumber({ errorHandler: bounce }))
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(jshint.reporter('fail'))
  .pipe(notify({ message: 'Hint task done' }));
});

// JS Library files
gulp.task('library', function() {
  return gulp.src(path + 'dev/js/lib/**/*.js')
  .pipe(gulp.dest(path + 'source/js/lib'));
});

// Scripts
gulp.task('scripts', ['jshint'], function() {
  return gulp.src([
    path + 'dev/js/plugins/**/*.js',
    path + 'dev/js/modules/**/*.js'
  ])
  .pipe(plumber({ errorHandler: bounce }))
  .pipe(sourcemaps.init())
  .pipe(concat('script.js'))
  .pipe(gulp.dest(path + 'source/js'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(uglify())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(path + 'source/js'))
  .pipe(notify({ message: 'Scripts task complete' }));
});

// Icons sprite
gulp.task('icons', function() {
  return gulp.src([path + 'dev/img/icons/**/*.svg'])
  .pipe(svgSprite({
    mode: {
      symbol: {
        dest: '',
        sprite: 'icons.svg'
      }
    }
  }))
  .pipe(cache(imagemin([
    imagemin.svgo({plugins: [{cleanupIDs: false}]})
  ])))
  .pipe(gulp.dest(path + 'source/img'));
});

// Optimize images
gulp.task('images', function() {
  return gulp.src(path + 'dev/img/**/*')
  .pipe(cache(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.svgo({plugins: [{cleanupIDs: false}]})
  ])))
  .pipe(gulp.dest(path + 'source/img'))
  .pipe(notify({ message: 'Images task complete' }));
});

// Copy font files
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest(path + 'source/fonts'));
})

// Default task
gulp.task('build', ['clean'], function() {
  gulp.start('styles', 'scripts', 'library', 'images', 'icons', 'fonts');
});

// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch(path + 'dev/scss/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch(path + 'dev/js/**/*.js', ['scripts']);

  // Watch .js files in lib folder
  gulp.watch(path + 'dev/js/lib/**/*.js', ['library']);

  // Watch image files
  gulp.watch(path + 'dev/img/**/*', ['images']);

  // Watch icons
  gulp.watch(path + 'dev/img/icons/**/*', ['icons']);

  // Watch font files
  gulp.watch(path + 'dev/fonts/**/*', ['fonts']);
});

// Clear cache
gulp.task('cache', function (done) {
  return cache.clearAll(done);
});

// Empty 'source' directory
gulp.task('clean', function() {
  return del([path + 'source/css', path + 'source/js', path + 'source/img']);
});

gulp.task('default', ['build', 'watch']);
