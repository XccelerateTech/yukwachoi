function reverse(number){
    let arr = [number];
    const arr2 =[];

    String(arr) === '54321';
    arr.toString() === '54321';
    var char = arr.toString().split('');  
    for (i=0; i<arr.toString().length; i++) {
      arr2.unshift(char[i]);
    }
    console.log(arr2);
}
reverse(54321);