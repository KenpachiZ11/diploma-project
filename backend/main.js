require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT;

mongoose
    .connect(
        `mongodb+srv://DaniilBy:${process.env.DB_PASSWORD}@diplomaproject.bhvad90.mongodb.net/?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
        },
    )
    .then(() => console.log('MongoBD connect'))
    .catch((err) => console.log(err))

// app.get('/', (req, res) => {
//     res.send('<h1>Hello Node.js</h1>');
// });

app.get('/aboute', (req, res) => {
    res.json({user : ['one, two']});
});


app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Server start on PORT:${PORT}`);
});