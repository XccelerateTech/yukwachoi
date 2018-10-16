function Divisiblebythree(){
    console.log("Hong");  
  }
  
  function Divisiblebyfive(){
    console.log("Kong");  
  }
  
  function Divisiblebythreeandfive(){
    console.log("Hong Kong");  
  }
  
  for (var i=1; i<=30; i++){
  
    if (i%3 === 0 && i%5 !== 0){
      Divisiblebythree();
    } else if (i%5 === 0 && i%3 !== 0){
      Divisiblebyfive();
    } else if (i%3 === 0 && i%5 === 0){
      Divisiblebythreeandfive();
    } else {
      console.log(i); 
    }
  }