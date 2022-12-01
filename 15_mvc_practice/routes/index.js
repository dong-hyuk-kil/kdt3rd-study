const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

console.log(controller);

router.get('/', controller.main);

router.post('/practice30', controller.practice30);

module.exports = router;