const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// const contact = mongoose.model('Contact');
const contact = require('../models/contact.model');

router.get('/contacts', function (req, res) {
  contact.find(function (err, contacts) {
    res.send(contacts);
  });
});

router.post('/contacts', function (req, res) {
  var newContact = new contact({
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    phone : req.body.phone,
  })
  // newContact.firstName = req.body.firstName;
  // newContact.lastName = req.body.lastName;
  // newContact.phone = req.body.phone;
  newContact.save(function (err) {
    if (!err) {
      console.log("Contact saved successfully");
      res.send("Done");
    } else {
      console.log("Insertion failed");
    }
  });
});

router.delete('/contacts/:id', function (req, res) {
  contact.remove(
    {
      _id: req.params.id
    },
    function (err, result) {
      if (!err) {
        res.json(result);
      } else {
        res.send(err);
      }
    }
  );
});

module.exports = router;