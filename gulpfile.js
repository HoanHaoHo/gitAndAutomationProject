var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer')
var imagemin = require('gulp-imagemin');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('default',['css','js','images'], () =>{
  
})


gulp.task('css', () =>
    gulp.src('src/css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist/css'))
);

gulp.task('images', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
);

gulp.task('js',()=>{
    gulp.src('./src/js/**/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist/js/'))
})


