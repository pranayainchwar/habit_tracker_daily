const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017`);
//mongoose.connect(`mongodb://127.0.0.1:27017/habits_db`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;
