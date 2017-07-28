var fs = require('fs'); // nodejs core file stream package
var yaml = require("js-yaml"); // encode yaml file into object so you can access independent values
var path = require("path"); // help you not to write slashes and more

var profile = yaml.safeLoad(fs.readFileSync("./profile.yml","utf8"));
var message = profile.name + " is " + profile.age + " years old and likes " + profile.movies.join(" and ") + ".";

fs.writeFileSync(path.join(".","profiles","sos.txt"), message, "utf8")

console.log(profile.name);