var express = require('express');
var router = express.Router();
const mentorsHandler = require('./handlers/mentors');


router.get('/', mentorsHandler.getAll);
router.get('/:id', mentorsHandler.get);
router.post('/', mentorsHandler.create);
router.put('/:id', mentorsHandler.update);
router.delete('/:id', mentorsHandler.destroy);

module.exports = router;
