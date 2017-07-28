var fs = require('fs'); // nodejs core file stream package
var yaml = require("js-yaml"); // encode yaml file into object so you can access independent values
var path = require("path"); // help you not to write slashes and more

var profile = yaml.safeLoad(fs.readFileSync("./profile.yml","utf8"));
var message = profile.name + " is " + profile.age + " years old and likes " + profile.movies.join(" and ") + ".";

fs.writeFileSync(path.join(".","profiles","sos.txt"), message, "utf8")

// async file read
fs.readFile("./profile.yml","utf8", function(err, file){

	if(err) {
		console.error(err);
		return;
	}

	var profile = yaml.safeLoad(file);
	var message = profile.name + " is " + profile.age + " years old and likes " + profile.movies.join(" and ") + ".";

	var filepath = path.join(".","profiles","sos1.txt");
	fs.writeFile(filepath,message,"utf8",function(err){
		if(err) {
			console.error(err);
			return;
		}
		console.log("Profile for "+profile.name+" written to "+filepath);
	});
});