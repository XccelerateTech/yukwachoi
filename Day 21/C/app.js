var getRandomInt = require('./randomNUM');
var cal = require('./Calculation');

var y = getRandomInt(26)
console.log(y + ' = ' + cal(y));