var string = 'abcdefghijklmnopqrstuvwxyz'
var arrAlphabet = string.split('');
//console.log(arrAlphabet);

var Pangram = function (pangram) {
    this.pangram = pangram; 
    this.arralphabet = arrAlphabet; 
}



Pangram.prototype.isPangram = function (){
    test = this.pangram.toLowerCase();
    var count = 0;
    for (var i=0; i<test.length; i++){
        if (test.indexOf(this.arralphabet[i]) != -1 ){
            count +=1;
        }
    }
    if (count === 26){
        return true;
    } else {
        return false;
    }
}

module.exports = Pangram; 