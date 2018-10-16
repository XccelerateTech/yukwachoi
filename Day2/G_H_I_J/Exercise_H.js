var result = '';
var number1;
var number2;
var string1;

function calculator(string1, number1, number2){

if (string1 === '+' ) {
  result = number1 + number2;
} else if (string1 === '-') {
  result = number1 - number2;
} else if (string1 === '*') {
  result = number1 * number2;
} else if (string1 === '/') {
  result = number1 / number2;
}

console.log(result); 

}


calculator('+', 5, 9); // 14
calculator('-', 7, 3); // 4
calculator('*', 5, 5); // 25
calculator('/', 9, 3); // 3