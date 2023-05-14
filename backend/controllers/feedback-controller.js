const ContactInfoForm = require('../models/feedback-data-form.js');

const getContactData = (req, res) => {
    res.send({message: 'Hello'})
    // ContactInfoForm
    //     .find()
    //     .then((dataForm) => res.json(dataForm))
    //     .catch(err => console.error(err))
};

module.exports = {
    getContactData,
};