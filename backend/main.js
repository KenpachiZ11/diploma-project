require('dotenv').config();

const express = require('express');
const router = express.Router();
const mongo = require('mongodb');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended : true});
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;

// let Author = require('./Schema/authorSchema');
try {
    mongoose
        .connect(`mongodb+srv://DaniilBy:${process.env.DB_PASSWORD}@diplomaproject.bhvad90.mongodb.net/?retryWrites=true&w=majority`)
        .then(() => console.log('MongoBD connect'))
        .catch((err) => console.log(err, 'error'))

    // let author = new Author({
    //     authorName: 'Alex',
    //     authorEmail: 'alex@gmail.com'
    // }).save();

} catch (error) {
    console.error(error)
}


    // console.log(author)

// app.get('/', (req, res) => {
//     res.send('<h1>Hello Node.js</h1>');
// });
app.use(bodyParser.json());
app.use(urlencodedParser);
app.use(cors());
app.get('/about', (req, res) => {
    res.json({ message: "Hello from server!" });
    // res.json({user : ['one, two']});
});


let Test = require('./Schema/testSchema');
app.post('/form', async(req, res) => {
    if(!req.body) return res.sendStatus(400);

    const postFormDate = new Test({
        author: req.body.author,
        title: req.body.title,
        description: req.body.description
    });

    console.log(postFormDate)

    await postFormDate.save();
    // res.redirect('/');
});





app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Server start on PORT:${PORT}`);
});
