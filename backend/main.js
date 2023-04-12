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

app.use(bodyParser.json());
app.use(urlencodedParser);
app.use(cors());

const homeRouter = require('./routes/routes-home.js');
const formRouter = require('./routes/routes-form.js');
const aboutRouter = require('./routes/routes-about.js');
const contactsRouter = require('./routes/routes-contacts.js');

app.use(homeRouter);
app.use(formRouter);
app.use(aboutRouter);
app.use(contactsRouter);

try {
    mongoose
        .connect(`mongodb+srv://DaniilBy:${process.env.DB_PASSWORD}@diplomaproject.bhvad90.mongodb.net/?retryWrites=true&w=majority`)
        .then(() => console.log('MongoBD connect'))
        .catch((err) => console.log(err, 'error'))

} catch (error) {
    console.error(error)
}

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Server start on PORT:${PORT}`);
});
