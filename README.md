# webcam-proxy

An Express driven Node application that will proxy an MJPEG video stream and snapshot images from another server running [MJPG Streamer](https://github.com/jacksonliam/mjpg-streamer "MJPG Streamer").  It leverages the [mjpeg-proxy](https://github.com/legege/node-mjpeg-proxy "node-mjpeg-proxy") node module for the live video stream.

## Installation
```bash
$ npm install
```
## Quick Start
Start the server with defaults:
```bash
$ node app.js
```
The application will be available at http://localhost:9000


The IP address and port of the server running MJPG Streamer and the port the local HTTP server will listen on can be overridden on the command line.
```bash
$ CAMERA_HOST=192.168.0.10 CAMERA_PORT=8000 HTTP_PORT=9000 node app.js
```

## People

The original author is [Justin Flammia](https://github.com/jflammia)

[List of all contributors](https://github.com/jflammia/webcam-proxy/graphs/contributors)

## License

  [MIT](LICENSE)
