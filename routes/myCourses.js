var express = require('express');
var router = express.Router();
const myCourses = require('./handlers/myCourses');

router.get('/', myCourses.get)
router.post('/', myCourses.create)


module.exports = router;
