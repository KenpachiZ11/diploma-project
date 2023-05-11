const express = require('express');
const router = express.Router();
const ContactInfoForm = require('../models/send-data-form.js');


router.post('/contacts', async(req, res) => {
    console.log(req, res)
    if(!req.body) return res.sendStatus(400);

    const contactInfoForm = new ContactInfoForm({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        sms: req.body.sms
    });

    console.log(contactInfoForm, 'contactInfoForm/contacts-controller.js');

    await contactInfoForm.save();
});

const getContactData = (req, res) => {
    ContactInfoForm
        .find()
        .then((dataForm) => res.json(dataForm))
        .catch(err => console.error(err))
};

module.exports = {
    getContactData
};