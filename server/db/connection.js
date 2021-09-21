const mongoose = require('mongoose');
require('dotenv').config();

let MONGODB_URI = 
    process.env.MONGODB_URI;
    // process.env.MONGODB_URI || "mongodb://localhost/author_db";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    autoIndex: false,
    useUnifiedTopology: true,
    // True by default. Set to false to make findOneAndUpdate() and findOneAndRemove() use native findOneAndUpdate() rather than findAndModify().
    // useFindAndModify: false
})
    .then(() => console.log("Established a connection to MongoDB"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

module.exports = mongoose.connection;

// autoIndex:false added to get rid of the following error:
// (node:17131) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
// https://github.com/Automattic/mongoose/issues/6890