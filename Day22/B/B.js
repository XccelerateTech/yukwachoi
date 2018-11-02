var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/text.txt', { encoding: 'utf8', highWaterMark: 32*1024 });

var writeable = fs.createWriteStream('anotherfile' + '/textcopy.txt');

readable.on('data', function(chunk){
    console.log(chunk.length);
    console.log(writeable.write(chunk));
});

readable.pipe(writeable);