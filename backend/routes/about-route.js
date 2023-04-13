const express = require('express');
const router = express.Router();
const { getAbout } = require('../controllers/about-controller.js');

router.get('/about', getAbout);

module.exports = router;