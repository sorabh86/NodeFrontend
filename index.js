var powerUp = require("./powerUp");

var randomList = [3,44,53.3,45,21,95,0.9483];
var pow10 = powerUp(10);
var transformed = randomList.map(pow10);

console.log(transformed);