const mongoose = require('mongoose');


const raceSchema = new mongoose.Schema({
  name: {
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
    type: Number,
    required: true
  }
});

const employeeModel = mongoose.model('race', employeeSchema);

module.exports = employeeModel;