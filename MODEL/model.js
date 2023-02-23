const mongoose = require('mongoose');


const raceSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  vehicle: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true
  },
  wins: {
    type: String,
    required : Number,
  }
});



module.exports = mongoose.model('race', raceSchema);
