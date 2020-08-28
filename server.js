#!/usr/bin/env node

// let http = require('http');
let express = require('express');
let app = express();
let fs = require("fs");
let path = require('path');
let log = require('loglevel');

let argv = require('./utils/argv');

log.setLevel(log.levels.INFO);

log.info(
  `> Server is starting on http://localhost:${+argv.port} for directory '${argv.directory}'`
);

const directoryPath = path.join(__dirname, argv.directory);

// fs.readdir(directoryPath, function (err, files) {
//   // handling error
//   if (err) {
//     return console.log('Unable to scan directory: ' + err);
//   }
//   // listing all files using forEach
//   files.forEach(function (file) {
//     // Do whatever you want to do with the file
//     console.log(file);
//   });
// });

// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World!');
// }).listen(+argv.port);


let api = require('./routes.js');

app.use('/api', api);

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(+argv.port)
