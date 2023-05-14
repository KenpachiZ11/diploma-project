const express = require('express');
const router = express.Router();
const { getContactData } = require('../controllers/feedback-controller.js');

router.get('/feedback', getContactData);

module.exports = router;