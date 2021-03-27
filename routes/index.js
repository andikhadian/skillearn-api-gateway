var express = require('express');
var router = express.Router();
const { APP_NAME } = process.env

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'API GATEWAY' });
});

module.exports = router;
