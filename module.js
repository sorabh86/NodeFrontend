var fs = require('fs');

var profile = fs.readFileSync("./profile.yml","utf8");

console.log(profile);