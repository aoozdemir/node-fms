let express = require('express');
let router = express.Router();
let argv = require('../utils/argv');
const axios = require('axios');


/* GET home page. */
router.get('/', function (req, res, next) {
  let backUrl;
  let path = req.query.path ? req.query.path : '.'

  if (req.query.path && req.query.path.split("/").length > 1) {
    backUrl = req.query.path.split("/").slice(0, -1).join('/')
  } else {
    backUrl = '/'
  }

  axios.get(`http://localhost:${+argv.port}/api`, {
    params: {
      path: path
    }
  })
    .then(function (response) {
      res.render('index', {
        title: 'Node File Management',
        items: response.data,
        backUrl: backUrl,
        originalUrl: req.originalUrl,
        currentPath: path,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
