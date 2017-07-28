var gulp = require('gulp');
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var sass = require("gulp-sass");
var jshint = require("gulp-jshint");
var stylish = require("jshint-stylish");
var csslint = require("gulp-csslint");

csslint.addFormatter('csslint-stylish');

gulp.task("default", function(){
	console.log("gulp gulp gulp");
});

gulp.task("jshint", function() {
	gulp.src(["./src/js/**/*.js"])
		.pipe(jshint())
		.pipe(jshint.reporter("jshint-stylish"));
});

gulp.task("compile:js", ["jshint"], function(){
	var bundle = browserify("./src/js/main.js").bundle();
	return bundle.pipe(source("main.js"))
		.pipe(gulp.dest("./public/assets/js"));
});

gulp.task("compile:css", function(){
	return gulp.src(["./src/scss/*.scss"])
		.pipe(sass().on('error', sass.logError))
		.pipe(csslint())
		.pipe(csslint.formatter('stylish'))
		.pipe(gulp.dest("./public/assets/css"));
});

gulp.task("watch", ["compile:js", "compile:css"], function(){
	// looking in ever folder for .js file using ./**/*.js
	gulp.watch(["./src/js/**/*.js"], ["compile:js"]);

	gulp.watch(["./src/scss/**/*.scss"],["compile:css"]);
});