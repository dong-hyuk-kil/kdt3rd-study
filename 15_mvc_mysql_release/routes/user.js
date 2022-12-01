const express = require('express');
const controller = require('../controller/Cuser');
const router = require("../../15_mvc_practice/routes");

// TODO: 라우트 설정
router.get('/', controller.main);


module.exports = router;
