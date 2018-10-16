function whoIsInSpace (callback){
    var http = new XMLHttpRequest();
    http.open('GET',`http://api.open-notify.org/astros.json`);
    http.onreadystatechange = function() {
        if(http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if(http.status == 200) {
           callback(http.responseText);
        } else {
            console.log('error occurred' + http.status);
        }
    }
    http.send();
}

whoIsInSpace(
    function callback(data){
        var output = JSON.parse(data);
        for (x=0; x < output.people.length; x++) {
        console.log(output.people[x].name);
        }
    }
);

