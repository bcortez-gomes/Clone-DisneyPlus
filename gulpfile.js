const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

function styles(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'));
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

function images(){
    return gulp.src('./src/imagens/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function(done){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    done();
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
    done();
}