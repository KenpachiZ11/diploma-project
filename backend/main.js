require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;

let Author = require('./Schema/authorSchema');
try {
    mongoose
        .connect(`mongodb+srv://DaniilBy:${process.env.DB_PASSWORD}@diplomaproject.bhvad90.mongodb.net/?retryWrites=true&w=majority`)
        .then(() => console.log('MongoBD connect'))
        .catch((err) => console.log(err, 'error'))

    let author = new Author({
        authorName: 'Alex',
        authorEmail: 'alex@gmail.com'
    }).save();

} catch (error) {
    console.error(error)
}


    // console.log(author)

// app.get('/', (req, res) => {
//     res.send('<h1>Hello Node.js</h1>');
// });
app.use(cors());
app.get('/about', (req, res) => {
    res.json({ message: "Hello from server!" });
    // res.json({user : ['one, two']});
});


app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Server start on PORT:${PORT}`);
});


    // let author = new Author({
    //     authorName: 'Author',
    //     authorEmail: 'author@mail.ru'
    // });
    