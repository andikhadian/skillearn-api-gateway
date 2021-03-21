var express = require('express');
var router = express.Router();
const imageCourses = require('./handlers/chapters');

router.post('/', imageCourses.create)
router.delete('/:id', imageCourses.destroy)


module.exports = router;
