const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/database', { useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;