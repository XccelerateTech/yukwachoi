
var elem = document.getElementById('learnmore');
elem.onclick = function () {
    elem.style.backgroundColor = 'red';
    elem.innerHTML ="buy flower";
    elem.style.borderColor = 'red';

    let P2 = document.getElementById('banner');
    if(P2){
        P2.remove();
    }

};

var work = document.getElementById('workblock');
work.onclick = function () {

    if(work){
        work.remove();
    }

};

var elem2 = document.getElementsByClassName('flowershop')[0];
elem2.onclick = function () {
    elem2.style.backgroundColor = 'grey';
    elem2.innerHTML ="Welcome to my flower shop";
    elem2.style.color = 'blue';
};

var elem3 = document.getElementsByClassName('boxIMG');
for (i=0; i<elem3.length; i++){
elem3[i].addEventListener('mouseover', function(e) {
    e.target.style.width= '80%';
    e.target.style.height= '80%';
    });
}
for (i=0; i<elem3.length; i++){
elem3[i].addEventListener('mouseleave', function(e) {
    e.target.style.width= '40%';
    e.target.style.height= '40%';
    });
}

var elem4 = document.getElementsByClassName('P2');
    elem4.onclick = function () {
        console.log(elem4)
    elem4.style.backgroundColor = 'white';
};

