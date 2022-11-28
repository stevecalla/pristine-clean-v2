const { Schema, model } = require("mongoose");

const employeeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  cell: {
    // TODO: Add validation for phone number
    type: String,
    required: true,
  },
  email: {
    // TODO: Add validation for email
    type: String,
    required: true,
  },
  isManager: {
    type: Boolean,
    required: true,
  },
  availability: [
    {
      Monday: {
        type: String,
        required: true,
      },
      Tuesday: {
        type: String,
        required: true,
      },
      Wednesday: {
        type: String,
        required: true,
      },
      Thursday: {
        type: String,
        required: true,
      },
      Friday: {
        type: String,
        required: true,
      },
      Saturday: {
        type: String,
        required: true,
      },
      Sunday: {
        type: String,
        required: true,
      },
    },
  ],
  schedule: [
    {
      type: Schema.Types.ObjectId,
      ref: "Schedule",
    },
  ],
});

const Employee = model("Employee", employeeSchema);

module.exports = Employee;
