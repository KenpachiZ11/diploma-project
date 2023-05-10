const express = require('express');
const router = express.Router();
const { getForm } = require('../controllers/form-controller.js');
const DataForm = require('../models/send-data-form.js');


router.get('/form', getForm);

router.post('/form', async(req, res) => {
    if(!req.body) return res.sendStatus(400);

    const postFormDate = new DataForm({
        author: req.body.author,
        title: req.body.title,
        description: req.body.description,
        linkImage: req.body.linkImage
    });

    console.log(postFormDate)

    await postFormDate.save();
});


module.exports = router;