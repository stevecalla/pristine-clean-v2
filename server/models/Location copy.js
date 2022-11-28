const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
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
  days: {
    type: Array,
    required: true,
  },
  laborHours: {
    type: Number,
    required: true,
  },
  instructions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Instructions',
    },
  ],
  manager: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Employee',
    },
  ],
  cleaners: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Employee',
    },
  ],
});

const Location = model('Location', locationSchema);

module.exports = Location;
