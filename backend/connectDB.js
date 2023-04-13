require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

let connectionDB;

module.exports = {
    connection: (callback) => {
        MongoClient
            .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@diplomaproject.bhvad90.mongodb.net/?retryWrites=true&w=majority`)
            .then((client) => {
                console.log('Connect to MongoDB');
                connectionDB = client.db();
                return callback();
            })
            .catch((err) => {
                return callback(err, 'err');
            })
    },
    getDB: () => connectionDB
};