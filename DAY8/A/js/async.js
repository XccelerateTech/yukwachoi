var http = new XMLHttpRequest();
http.open('GET', '../server/data.json');
http.onreadystatechange = function() {
    if(http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status == 200) {
        console.log(http.responseText);
        var myObj = JSON.parse(http.responseText);
        console.log(myObj.name);
    } else {
        console.log('error occurred' + http.status);
    }
}
http.send();