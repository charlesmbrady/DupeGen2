/* Mongo Database
* - this is where we set up our connection to the mongo database
*/
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let MONGO_URL;
const MONGO_LOCAL_URL = 'mongodb://localhost/DupeGen';
// use this for connecting to prod DB    const MONGO_LOCAL_URL = 'mongodb://heroku_r453vcr5:1iqbbnf9t8vt9sl80rpcpis03k@ds263146.mlab.com:63146/heroku_r453vcr5';
//prod URI

if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
	MONGO_URL = process.env.MONGODB_URI;
} else {
	mongoose.connect(MONGO_LOCAL_URL, { useNewUrlParser: true }); // local mongo url
	MONGO_URL = MONGO_LOCAL_URL;
}

// should mongoose.connection be put in the call back of mongoose.connect???
const db = mongoose.connection;
db.on('error', err => {
	console.log(`There was an error connecting to the database: ${err}`);
});

db.once('open', () => {
	console.log(`You have successfully connected to your mongo database: ${MONGO_URL}`);
});

module.exports = db;