const express = require('express');
const router = express.Router();
const { testRoute } = require('../controllers/test.controller');

router.get('/test', testRoute);

module.exports = router;
