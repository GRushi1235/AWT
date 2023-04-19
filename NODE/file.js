// // opening file for write mode
var fs = require('fs');
 fs.open('Sample.txt', 'w', function (err, file) 
 { if (err) throw err; 
    console.log('Saved!');
});


// Rename Files
var fs = require('fs');
fs.rename('Sample.txt', 'newtest.txt', function (err) {
if (err) throw err;
console.log('File Renamed!');
});

