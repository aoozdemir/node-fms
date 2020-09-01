let fs = require('fs');
var fpath = require("path");
let express = require('express');
let router = express.Router();
let argv = require('../utils/argv');

router.get('/', function (req, res, next) {
  let backUrl;
  let path = req.query.path ? req.query.path : '/'
  let file = req.query.file ? req.query.file : 0

  if (file) {
    // calculate the previous page
    if (req.query.path && req.query.path.split("/").length > 1) {
      backUrl = "?path=" + req.query.path.split("/").slice(0, -1).join('/')
    } else {
      backUrl = '/'
    }

    let fileContent = fs.readFileSync(argv.directory + path, { dotfiles: 'allow' })
    let fileName = fpath.basename(argv.directory + path)

    res.render('edit', {
      title: 'Node File Management',
      backUrl: backUrl,
      originalUrl: req.originalUrl,
      currentPath: path,
      fileContent: fileContent,
      fileName: fileName
    })
  }
})

module.exports = router;
