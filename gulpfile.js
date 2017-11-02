//gulpfile.js
var gulp = require('gulp-help')(require('gulp'));
var sass = require('gulp-sass');
var minify = require('gulp-minify');

//style paths
var sassFiles = './assets/styles/sass/**/*.scss',
    cssDest = './assets/styles/css/';

gulp.task('sass', function(){
    return gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

gulp.task('minify', function(){
  	return gulp.src('./_site/js/*.js')
    	.pipe(minify({
    		ext:{
	            src:'-debug.js',
	            min:'.js'
	        }
    	}))
    	.pipe(gulp.dest('./_site/js'));
});

gulp.task('watch', function(){
    gulp.watch(sassFiles,['sass']);
});

gulp.task('default', [ 'sass', 'minify']);