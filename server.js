#!/usr/bin/env node

// let http = require('http');
let express = require('express');
let app = express();
let fs = require("fs");
let path = require('path');
let log = require('loglevel');

let argv = require('optimist')
  .usage([
    'USAGE: $0 [-p <port>] [-d <directory>]'
  ])
  .option('port', {
    alias: 'p',
    'default': 8080,
    description: 'Server Port'
  })
  .option('directory', {
    alias: 'd',
    'default': '.',
    description: 'Root Files Directory'
  })
  .argv;


log.setLevel(log.levels.INFO);

log.info(
  `Server is starting on port ${+argv.port} directory '${argv.directory}'`
);

const directoryPath = path.join(__dirname, argv.directory);

fs.readdir(directoryPath, function (err, files) {
  // handling error
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  // listing all files using forEach
  files.forEach(function (file) {
    // Do whatever you want to do with the file
    console.log(file);
  });
});

// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World!');
// }).listen(+argv.port);


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(+argv.port)
