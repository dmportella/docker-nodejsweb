# Docker-nodejsweb

Node JS app build to run on RANCHER a docker management platform.

## DOCKERHUB

[![dockeri.co](http://dockeri.co/image/dmportella/nodejsweb)](https://hub.docker.com/r/dmportella/nodejsweb/)

### Normal route

Web site should be available on port `8080`.

## Building

The shell file `build.sh` will run npm install, install and run grunt and it will build and run the docker image.

> $ `./build.sh`

Builds docker image and tags it.

> $ `./build-image.sh`