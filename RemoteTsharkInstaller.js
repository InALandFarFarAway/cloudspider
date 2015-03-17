var http = require('http');
http.createServer(function (req, res) {
    
    installTshark('192.168.0.116', 22, 'critical', 'password');

}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/');


var installTshark = function (host, port, username, password) {
    var Client = require('ssh2').Client;

    var conn = new Client();
    conn.on('ready', function () {
        console.log('Client :: ready');
        conn.exec('echo ' + password + '| sudo -S apt-get install -y tshark',
                function (err, stream) {
                    if (err)
                        throw err;
                    stream.on('data', function (data) {
                        console.log('STDOUT: ' + data);
                    }).stderr.on('data', function (data) {
                        console.log('STDERR: ' + data);
                    }).on('exit', function (code, signal) {
                        console.log(
                                'Exited with code ' + code + ' and signal: ' + signal
                                );
                    });
                });

    }).connect({
        host: host,
        port: port,
        username: username,
        password: password
    });
}
