function middle (num){
    var Maxnum = Math.max(...num) ;
    var Minnum = Math.min(...num) ;
    //console.log(Maxnum);
    //console.log(Minnum);
    for (i=0; i < num.length; i++){
        if (num[i] !== Maxnum && num[i] !== Minnum){
            console.log( i + " -> " + num[i] + " at index " + i + " lies between " + Maxnum + " and " + Minnum);
        }
    }
}

middle([2,3,1]) // 0 -> 2 at index 0 lies between 3 and 1
middle([88, 7, 55 ]) // 2 -> 55 lies between 7 and 88