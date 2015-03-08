var node_ssh, ssh;
/*
 * npm install node-ssh
 */
node_ssh = require('node-ssh');

/*
 * IP of remote host
 */
var host = '127.0.0.1';

/*
 * Username
 */
var username = 'root';

/*
 * Path to your private key, in readme file there is guide how to generate this
 */
var privateKey = '/home/root/.ssh/id_rsa';

/*
 * We only need this because of installation of packages, not for ssh
 */
var rootPassword = 'password';
 
/*
 * new ssh connection
 */
ssh = new node_ssh({
    host: host,
    username: username,
    privateKey: privateKey
});

ssh.connect().then(function() {
    ssh.exec('echo ' + rootPassword + '| sudo -S apt-get install -y tshark').
        then(function(result) {
            console.log('STDOUT: ' + result.stdout);
            console.log('STDERR: ' + result.stderr);
        });
});