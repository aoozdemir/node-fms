let path = require('path');

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
    description: 'Root Files Directory'
  })
  .argv;

if (argv.directory) {
  argv.directory = path.join(__dirname, argv.directory);
} else {
  argv.directory = path.join(__dirname, '../');
}


module.exports = argv
