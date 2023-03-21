const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    authorName: {
        type: String,
        required: true, //Требует обязательного наличия значения для свойства
    },
    authorEmail: {
        type: String,
        required: true, //Требует обязательного наличия значения для свойства
    }
});

let Author = mongoose.model('Author', authorSchema);
module.exports = Author;