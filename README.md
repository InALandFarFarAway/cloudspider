# Cloud Spider

## About

Remote host traffic tracing.

### SSH set up
We have to generate private ssh key and copy it to remote host
```sh
$ ssh-keygen -t rsa
$ ssh-copy-id username@host
```

### Node SSH

```sh
$ cd /your/nodejs/directory
$ npm install node-ssh
```
