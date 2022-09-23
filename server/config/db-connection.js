const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/jwsband', {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
