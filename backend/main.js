require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('<h1>Hello Node.js</h1>');
});

app.get('/danya', (req, res) => {
    res.send('<h1>Danya</h1>');
});

app.listen(PORT, () => {
    console.log(`PORT = ${PORT} Listen`);
});