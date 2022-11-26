import gulp from "gulp";
import { deleteAsync } from "del";
import pug from "gulp-pug";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import sassGlob from "gulp-sass-glob";
import autoprefixer from "gulp-autoprefixer";
import gcmq from "gulp-group-css-media-queries";
import cleanCSS from "gulp-clean-css";
import browserSync from "browser-sync";
import sourcemaps from "gulp-sourcemaps";
import rename from "gulp-rename";
import webpack from "webpack-stream";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import imagemin from "gulp-imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminOptipng from "imagemin-optipng";
import newer from "gulp-newer";

const sass = gulpSass(dartSass);

const clean = () => {
  return deleteAsync("./public");
};

const HTML = () => {
  return gulp.src("./src/*.html").pipe(gulp.dest("./public"));
};

const pugHTML = () => {
  return gulp
    .src("./src/pug/*.pug")
    .pipe(pug({ pretty: false }))
    .pipe(gulp.dest("./public"))
    .pipe(browserSync.stream());
};

const scss = () => {
  return gulp
    .src("./src/scss/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./public/css"))
    .pipe(browserSync.stream());
};

const scssMin = () => {
  return (
    gulp
      .src("./src/scss/style.scss")
      .pipe(sassGlob())
      .pipe(
        sass({
          outputStyle: "expanded",
        })
      )
      .pipe(
        autoprefixer({
          cascade: false,
        })
      )
      // .pipe(gcmq())
      .pipe(cleanCSS())
      .pipe(
        rename({
          extname: ".min.css",
        })
      )
      .pipe(gulp.dest("./public/css"))
  );
};

const js = () => {
  return gulp
    .src("./src/js/**/*.js")
    .pipe(
      webpack({
        mode: "development",
        output: {
          filename: "main.js",
        },
      })
    )
    .pipe(gulp.dest("./public/js"))
    .pipe(browserSync.stream());
};

const jsMin = () => {
  return gulp
    .src("./src/js/**/*.js")
    .pipe(
      webpack({
        mode: "production",
        output: {
          filename: "main.min.js",
        },
      })
    )
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("./public/js"));
};

const fonts = () => {
  return gulp.src("./src/fonts/**/*.*").pipe(gulp.dest("./public/fonts")).pipe(browserSync.stream());
};

const img = () => {
  return gulp
    .src("./src/img/**/*.*")
    .pipe(newer("./public/img"))
    .pipe(gulp.dest("./public/img"))
    .pipe(browserSync.stream());
};

const imgMin = () => {
  return gulp
    .src(["./src/img/**/*.*", "!./src/img/**/*.svg"])
    .pipe(imagemin([imageminMozjpeg({ quality: 95, progressive: true }), imageminOptipng({ optimizationLevel: 5 })]))
    .pipe(gulp.dest("./public/img"));
};

const svg = () => {
  return gulp.src("./src/img/**/*.svg").pipe(gulp.dest("./public/img")).pipe(browserSync.stream());
};

const vendor = () => {
  return gulp.src("./src/vendor/**/*.*").pipe(gulp.dest("./public/vendor")).pipe(browserSync.stream());
};

const server = () => {
  browserSync.init({
    server: {
      baseDir: "./public",
    },
    port: 3000,
    notify: false,
    open: false,
  });
};

function watcher() {
  // gulp.watch("./src/*.html", HTML);
  gulp.watch("./src/fonts/**/*.*", fonts);
  gulp.watch("./src/pug/**/*.pug", pugHTML);
  gulp.watch("./src/scss/**/*.*", scss);
  gulp.watch("./src/js/**/*.js", js);
  gulp.watch("./src/img/**/*.*", img);
}

const dev = gulp.series(clean, fonts, img, vendor, pugHTML, scss, js, gulp.parallel(watcher, server));
const build = gulp.series(clean, fonts, imgMin, vendor, svg, pugHTML, scssMin, jsMin, scss);

gulp.task("default", dev);
gulp.task("build", build);
