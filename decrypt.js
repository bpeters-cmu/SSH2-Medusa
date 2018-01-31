var cryptr = require('cryptr');
var exec = require('child_process').exec;
var fs   = require('fs');



function decrypt (file, key, err) {

var data = fs.readFileSync(file);
console.log(data.toString('base64'));

exec('python decrypt.py ' + key + ' ' + file + ' ' + data.toString('base64'), function(error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }});


}
