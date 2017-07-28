var alertstars = require("./lib/alertstars");
var _ = require("underscore");
var $ = require("jquery");

window.onload = function () {
	var message = [
		"Welcome!",
		"This is my Page",
		"Do you like it?",
		"Yes, I suppose."
	];

	_.each(messages,function(mess){
		$("body").append($("<p>").text(message));
	});

	// alertstars("Welcome to my page!!");
};