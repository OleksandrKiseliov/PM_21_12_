const { src, dest, watch, series } = require("gulp");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require('sass'));
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

// Copy HTML files to the dist folder
function task_html() {
  return src("app/html/*.html")
    .pipe(dest("dist"))
    .pipe(browserSync.stream()); // Trigger a browser refresh
}

exports.html = task_html;

// Concatenate, compile Sass to CSS, add prefixes, and minify code
function task_sass() {
  return src("app/scss/*.scss")
    .pipe(concat('styles.scss'))
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest("dist/css"))
    .pipe(browserSync.stream()); // Trigger a browser refresh
}

exports.sass = task_sass;

// Concatenate and compress JS files
function task_scripts() {
  return src("app/js/*.js")
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest("dist/js"))
    .pipe(browserSync.stream()); // Trigger a browser refresh
}

exports.scripts = task_scripts;

// Compress images
function task_imgs() {
  return src("app/img/*.+(jpg|jpeg|png|gif|svg)")
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      interlaced: true
    }))
    .pipe(dest("dist/images"))
    .pipe(browserSync.stream()); // Trigger a browser refresh
}

exports.imgs = task_imgs;

// Watch for changes in files
function task_watch() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });

  watch("app/html/*.html", task_html);
  watch("app/js/*.js", task_scripts);
  watch("app/scss/*.scss", task_sass);
  watch("app/img/*.+(jpg|jpeg|png|gif|svg)", task_imgs);
}
function task_copy_images() {
  return src("app/img/.")
    .pipe(dest("dist/images"));
}
exports.copy_images = task_copy_images;


exports.watch = task_watch;

// Default task to run all tasks
exports.default = series(task_html, task_sass, task_scripts, task_imgs, task_watch,task_copy_images);
