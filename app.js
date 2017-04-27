const CAMERA_HOST = (process.env.CAMERA_HOST || "192.168.0.1")
const CAMERA_PORT = (process.env.CAMERA_PORT || 8080 )
const CAMERA_STREAM_URI = "/?action=stream"
const CAMERA_SNAPSHOT_URI = "/?action=snapshot"
const HTTP_PORT = (process.env.HTTP_PORT || 9000 )

var MjpegProxy = require('mjpeg-proxy').MjpegProxy;
var express = require('express');
var path = require('path');
var http = require('http');
var app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/camera', new MjpegProxy('http://' + CAMERA_HOST + ':' + CAMERA_PORT + CAMERA_STREAM_URI).proxyRequest);
app.get('/camera/snapshot', function(req, res) {
  var options = {
    host: CAMERA_HOST,
    port: CAMERA_PORT,
    path: CAMERA_SNAPSHOT_URI
  };

  http.get(options, function(response) {
    if (response.statusCode === 200) {
      res.writeHead(200, {
        'Content-Type': response.headers['content-type']
      });
      response.pipe(res);
    } else {
      res.writeHead(response.statusCode);
      res.end;
    }
  }).end();
});

app.listen(HTTP_PORT, function() {
  console.log('webcam-proxy is listening on port ' + HTTP_PORT + '...');
});
