var gulp = require('gulp');
var browserify = require("browserify");
var source = require("vinyl-source-stream");

gulp.task("default", function(){
	console.log("gulp gulp gulp");
});

gulp.task("compile:js",function(){
	var bundle = browserify("./src/js/main.js").bundle();
	bundle.pipe(source("main.js"))
		.pipe(gulp.dest("./public/assets/js"));
});

gulp.task("watch", function(){
	gulp.watch(["./src/js/main.js"], ["compile:js"])
});