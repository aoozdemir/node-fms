let fs = require('fs');
let path = require('path');

let FileManager = {};

FileManager.listDirectory = function (dirPath) {
  let body = []
  let files = fs.readdirSync(dirPath);

  for (let i = 0; i < files.length; ++i) {
    let metadata = {}

    let stats = fs.statSync(path.join(dirPath, files[i]))
    metadata.name = files[i];
    metadata.is_dir = stats.isDirectory();
    metadata.size = stats.size;
    metadata.mtime = stats.mtime.getTime();

    body.push(metadata)
  }

  return body;
}

module.exports = FileManager;
