var number2;

function numberjudge (number1){
  if(number1 <=0 || isNaN(number1)){
    throw new Error('Please enter a number');
  } else if (number1 >= 1000000) {
    return number1;
  } else {
    while (number1 < 100000){
      number1 = number1 * 10; 
    }
    return number1;
  }
}

console.log(numberjudge(4.6));
