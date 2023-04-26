const express = require('express');
const router = express.Router();
const { getFormData } = require('../controllers/about-controller.js');

router.get('/about', getFormData);

module.exports = router;