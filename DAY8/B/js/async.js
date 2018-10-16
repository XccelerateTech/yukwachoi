function informMe(endpoint, value, callback){
        
    var http = new XMLHttpRequest();
    http.open("GET",`https://restcountries.eu/rest/v2/${endpoint}/${value}`);
    http.onreadystatechange = function(){
        if(http.readyState != XMLHttpRequest.DONE){
            return;
        } else if (http.status == 200){
            //   let data = http.responseText;
              
            //   console.log(JSON.parse(data));
              
              callback(http.responseText);
            // let data = JSON.parse(http.responseText);
            // callback(data);
        } else {
            console.log("error occurred " + http.status);
        }
    };
    
    http.send();
}

informMe("capital","washington", 
function callback(data){console.log(JSON.parse(data))}
);
