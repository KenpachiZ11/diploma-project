const express = require('express');
const router = express.Router();
const { getContactData } = require('../controllers/contacts-controller.js');

router.get('/contacts', getContactData);


module.exports = router;