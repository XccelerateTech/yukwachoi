var myArray = [4, 8, 2, 7, 5];
// var a = Array.map(function(n){
//     return n*2; 
// });
// console.log(a);

function processArray (arr, callback){
    return console.log(arr.map(callback));
};

processArray(myArray, function(n){
    return n * 5 ;
});

processArray(myArray, function(n){
    return n + 2 ;
});
