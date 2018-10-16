function transform(number){
    var New = number.split('');
    New.sort();
    New.sort(function(first, second){
      return first > second;
    });
  
    var object = { "1":"a" , "2":"b" ,"3":"c", "4":"d", "5":"e","6":"f", "7":"g", "8":"h", "9":"i", "0":"j" };
      
    var arr =[];
      
      for (i = 0; i < New.length ; i++){
         arr.push(object[New[i]]);
      };
  
      var sum = arr.reduce(function(accumulator, number){
      return accumulator + number;
      }, );
  
      console.log(sum);
  }
  
  transform('213')