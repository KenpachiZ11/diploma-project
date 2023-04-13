const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const DataForm = require('../models/send-data-form.js');


router.get('/form', async(req, res) => {
    res.json({ message: "Hello from server 'Form'" });
    if(!req.body) return res.sendStatus(400);
});

router.post('/form', async(req, res) => {
    if(!req.body) return res.sendStatus(400);

    const postFormDate = new DataForm({
        author: req.body.author,
        title: req.body.title,
        description: req.body.description
    });

    console.log(postFormDate)

    await postFormDate.save();
});


module.exports = router;