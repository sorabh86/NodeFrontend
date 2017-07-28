# Git pushing tags
- $ git push --tags

# Front End Project setup
1. npm install -g http-server
2. $ http-server (server start by hosting root folder files)

# NodeJs Workflow Tools
1. Browserify
	- npm install -g browserify
	- browserify src/js/main.js -o public/assets/js/main.js (bundle your files)
	- [gulp](http://gulpjs.com) 
		- npm install -g gulp (globally)
		- npm install gulp (local project)
		- $ touch gulpfile.js (create a gulp file)
		- $ npm install browserify (must install it locally for using task in gulp)
		- vinyl-source-stream
		- search gulp plugins for sass and gulp-sass
	- Lint hint Tools $ npm install jshint gulp-jshint gulp-csslint jshint-stylish
		- jshint
		- gulp-jshint
		- jshint-stylish (styling jshint)
		- gulp-csslint
		- csslint-stylish (styling csslint)