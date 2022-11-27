const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
  locationId: {
    type: String,
    required: true,
  },
  businessName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Location = model('Location', locationSchema);

module.exports = Location;

