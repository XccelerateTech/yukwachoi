const EventEmitter = require('events');

class Timer extends EventEmitter{
    constructor(second){
        super();
        this.second = second;
    }

    count(){
        var run = setInterval(myTimer, 100);
        var that = this; 
        function myTimer(){
            if (that.second > 0){
                console.log(`${that.second} left`);
                that.second--;
            } else {
                that.emit('tick', 'keboom')
                clearInterval(run); 
            }
        }
    }
}

var timer = new Timer(100); 

timer.on('tick', function(mssg){
    console.log(mssg); 
})

module.exports = timer;