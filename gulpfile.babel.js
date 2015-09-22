import gulp from "gulp";
import gutil from "gulp-util";
import gulpif from "gulp-if";
import filter from "gulp-filter";
import inject from "gulp-inject";
import replace from "gulp-replace";
import browserSync from "browser-sync";
import uglify from "gulp-uglify";
import minifyCSS from "gulp-minify-css";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import rename from "gulp-rename";
import rev from "gulp-rev";
import watch from "gulp-watch";
import plumber from "gulp-plumber";
import browserify from "browserify";
import babelify from "babelify";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import del from "del";
import runSequence from "run-sequence";
import getWantedDependencies from "get-wanted-dependencies";
import config from "./gulpconfig";

let env = config.environments.find(e => e.name === (process.env.NODE_ENV || "development"));
if (env) {
  gutil.log(gutil.colors.gray(`Selected environment = ${env.name}.`));
} else {
  throw new Error("Unsupported environment specified.");
}

gulp.task("clean", done => {
  del(config.buildDir).then(() => done()).catch(err => done(err));
});

gulp.task("check-dependencies", done => {
  getWantedDependencies(__dirname).then(wantedDependencies => {
    if (wantedDependencies.length > 0) {
      gutil.log(gutil.colors.red("Wanted dependencies not installed. Run `npm install`."));
      gutil.beep();
      process.exit(1);
    }

    done();
  }).catch(err => done(err));
});

gulp.task("build-scripts", () => {
  return browserify({ entries: `./${config.script}`, extensions: [".jsx"] })
    .transform(babelify.configure({ optional: ["es7.classProperties", "es7.decorators"] }))
    .bundle()
    .on("error", function(err) {
      gutil.log(gutil.colors.red(err.message));
      gutil.beep();
      this.emit("end");
    })
    .pipe(source(`${env.name}.js`)) // Convert from Browserify stream to vinyl stream.
    .pipe(buffer()) // Convert from streaming mode to buffered mode.
    .pipe(replace("$ENV", JSON.stringify(env)))
    .pipe(gulpif(env.minify, uglify({ mangle: false })))
    .pipe(gulpif(env.rev, rev()))
    .pipe(gulp.dest(`${config.buildDir}/scripts`));
});

gulp.task("build-styles", () => {
  return gulp
    .src(config.style)
    .pipe(plumber(err => {
      gutil.log(gutil.colors.red(err.message));
      gutil.beep();
    }))
    .pipe(sass())
    .pipe(rename(`${env.name}.css`))
    .pipe(autoprefixer({ browsers: ["> 1%"] }))
    .pipe(gulpif(env.minify, minifyCSS()))
    .pipe(gulpif(env.rev, rev()))
    .pipe(gulp.dest(`${config.buildDir}/styles`))
    .pipe(browserSync.reload({ stream: true })); // Stream the reload to make it happen immediately
});

gulp.task("build-misc", () => {
  let imagesFilter = filter("**/*.{ico,gif,jpg,png}", { restore: true });
  let fontsFilter = filter("**/*.{otf,eot,svg,ttf,woff,woff2}", { restore: true });

  return gulp
    .src(config.misc)
    .pipe(imagesFilter)
    .pipe(gulp.dest(`${config.buildDir}/images`))
    .pipe(imagesFilter.restore)
    .pipe(fontsFilter)
    .pipe(gulp.dest(`${config.buildDir}/fonts`))
    .pipe(fontsFilter.restore);
});

gulp.task("build-index", () => {
  return gulp
    .src(config.index)
    .pipe(
      inject(
        gulp.src([`${config.buildDir}/**/*.css`, `${config.buildDir}/**/*.js`], { read: false }),
        { ignorePath: config.buildDir, addRootSlash: false, removeTags: true, quiet: true }
      )
    )
    .pipe(gulp.dest(config.buildDir));
});

gulp.task("build", ["clean"], done => {
  runSequence("check-dependencies", "build-styles", "build-scripts", "build-misc", "build-index", done);
});

gulp.task("serve", ["build"], () => {
  browserSync({
    server: {
      baseDir: config.buildDir,
    },
    port: config.serverPort
  });
});

gulp.task("watch", ["serve"], () => {
  return watch(`${config.sourceDir}/**/*`, () => { runSequence("build") });
});

gulp.task("default", ["build"]);
