const express = require('express');
const router = express.Router();
const { submitContact } = require('../controllers/contact.controller');

router.post('/contact', submitContact);

module.exports = router;
