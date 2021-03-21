var express = require('express');
var router = express.Router();
const orderPaymentsHandler = require('./handlers/orderPayments');


router.get('/', orderPaymentsHandler.getOrders);

module.exports = router;
