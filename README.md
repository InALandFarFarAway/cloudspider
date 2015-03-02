# Cloud Spider

## About

Remote host traffic tracing.

# Set up docker

##Add the docker group if it doesn't already exist.
sudo groupadd docker

##Add the connected user "${USER}" to the docker group. Change the user name to match your preferred user.
sudo gpasswd -a ${USER} docker

##Restart the Docker daemon:
sudo service docker restart

##If you are on Ubuntu 14.04 and up use docker.io instead:
sudo service docker.io restart

Type nodejs index.js for installation of tshark on docker