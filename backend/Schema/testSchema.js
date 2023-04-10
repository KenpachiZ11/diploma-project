const mongoose = require('mongoose');

const testScema = new mongoose.Schema({
    author: {
        type: String,
        required: true, //Требует обязательного наличия значения для свойства
    },
    title: {
        type: String,
        required: true, //Требует обязательного наличия значения для свойства
    },
    description: {
        type: String,
        required: false, //Требует обязательного наличия значения для свойства
    }
});

let Test = mongoose.model('Test', testScema);
module.exports = Test;