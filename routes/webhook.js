var express = require('express');
var router = express.Router();
const webhookHandler = require('./handlers/webhook');

const verifyToken = require('../middlewares/verifyToken');


router.post('/', webhookHandler.webhook);

module.exports = router;
