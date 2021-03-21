var express = require('express');
var router = express.Router();
const mediaHandler = require('./handlers/media');

const verifyToken = require('../middlewares/verifyToken');

router.get('/', mediaHandler.getAll);
router.post('/', verifyToken, mediaHandler.create);
router.delete('/:id', mediaHandler.destroy);

module.exports = router;
