const dotenv = require('dotenv');
dotenv.config();

const mongoClient = require('mongodb').mongoclient;

let database;

const intDb = (callback) => {
    if (database){
        console.log('Db is already initialaized!');
        return callback(null, database);
       }
       mongoClient.connect(process.env.MONGODB_URL)
         .then((client) => {
            database = clientIn;
            callback(null,database);
         })
         .catch((err) => {
            callback(err);
         });
    
};

const getDatabase = () => {
    if (! database) {
        throw Error('Database not initialized')
    }
    return database;
};

module.exports = {
    initDb,
    getDatabase
};