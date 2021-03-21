var express = require('express');
var router = express.Router();
const usersHandler = require('./handlers/users');

const verifyToken = require('../middlewares/verifyToken')

router.get('/', usersHandler.getAll);
router.get('/by_id', verifyToken, usersHandler.getUser);
router.post('/register', usersHandler.register);
router.post('/login', usersHandler.login);
router.put('/', verifyToken, usersHandler.update);
router.post('/logout', verifyToken, usersHandler.logout);

module.exports = router;
