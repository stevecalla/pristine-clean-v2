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
  shifts: {
    type: String,
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
});

const Location = model('Location', locationSchema);

module.exports = Location;