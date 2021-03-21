var express = require('express');
var router = express.Router();
const refreshTokensHandler = require('./handlers/refreshTokens');

router.post('/', refreshTokensHandler.refreshToken);

module.exports = router;
