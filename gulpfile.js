var gulp = require('gulp');
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var sass = require("gulp-sass");

gulp.task("default", function(){
	console.log("gulp gulp gulp");
});

gulp.task("compile:js",function(){
	var bundle = browserify("./src/js/main.js").bundle();
	return bundle.pipe(source("main.js"))
		.pipe(gulp.dest("./public/assets/js"));
});

gulp.task("compile:css", function(){
	return gulp.src(["./src/scss/*.scss"])
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest("./public/assets/css"));
});

gulp.task("watch", ["compile:js", "compile:css"], function(){
	// looking in ever folder for .js file using ./**/*.js
	gulp.watch(["./src/js/**/*.js"], ["compile:js"]);

	gulp.watch(["./src/scss/**/*.scss"],["compile:css"]);
});