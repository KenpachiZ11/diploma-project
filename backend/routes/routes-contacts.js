const express = require('express');
const router = express.Router();

router.get('/contacts', (req, res) => {
    res.json({ message: "Hello from server 'Contacts'" });
});

module.exports = router;