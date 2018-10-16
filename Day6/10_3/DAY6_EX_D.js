var scores = [80, 90, 70, 40, 20];

var sum = scores.reduce(function(accumulator, number){
    return accumulator + number;
}, 0);

average = Math.round(sum/scores.length);
console.log(average); 