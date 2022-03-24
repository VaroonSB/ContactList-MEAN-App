const mongoose = require('mongoose');

mongoose.connect(
  "mongodb://localhost:27017/contactlist",
  {
    useNewUrlParser: true
  },
  function (err) {
    if (!err) {
      console.log("DB connected");
    } else {
      console.log("DB connection failed");
      console.log(err);
    }
  }
);

const Contact = require('./contact.model');