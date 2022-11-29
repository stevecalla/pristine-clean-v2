const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// import schema from Book.js
// const Location = require('./Location');
// import schema from Availability.js
const availabilitySchema = require("./Availability");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    cell: {
      // TODO: Add validation for phone number
      type: String,
    },
    isManager: {
      type: Boolean,
    },
    availability: [
      availabilitySchema
    ],
    locations:
    {
      type: Schema.Types.Array,
      ref: 'Location',
    },
    // locations: [Location.schema]
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
userSchema.virtual("bookCount").get(function () {
  return this.savedBooks.length;
});

const User = model("User", userSchema);

module.exports = User;
