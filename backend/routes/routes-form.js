const express = require('express');
const router = express.Router();
const mongo = require('mongodb');
const mongoose = require('mongoose');

let Test = require('../Schema/testSchema');
router.post('/form', async(req, res) => {
    if(!req.body) return res.sendStatus(400);

    const postFormDate = new Test({
        author: req.body.author,
        title: req.body.title,
        description: req.body.description
    });

    console.log(postFormDate)

    await postFormDate.save();
});


module.exports = router;