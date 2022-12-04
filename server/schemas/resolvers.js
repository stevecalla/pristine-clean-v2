const { AuthenticationError } = require("apollo-server-express");
const { User, Location, Incident } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      // if (context.user) {
      return User.find().populate("locations");
      // }
      // throw new AuthenticationError("You need to be logged in!");
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    me: async (parent, { _id }, context) => {
      // if (context.user) {
      return User.findById({ _id }).populate("locations");
      // }
      // throw new AuthenticationError("You need to be logged in!");
    },

    locations: async () => {
      return Location.find().sort({ createdAt: -1 });
    },

    location: async (parent, { locationId }) => {
      console.log("resolve js line 38 = ", locationId);

      return Location.findOne({ _id: locationId });
    },

    incidents: async (parent, args, context) => {
      // if (context.user) {
      return Incident.find();
      // }
      // throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    deleteUser: async (parent, { _id }) => {
      return User.findOneAndDelete({ _id });
    },

    addIncident: async (
      parent,
      {
        employeeName,
        locationName,
        employeePhone,
        subject,
        urgent,
        incidentDetails,
      }
    ) => {
      return Incident.create({
        employeeName,
        locationName,
        employeePhone,
        subject,
        urgent,
        incidentDetails,
      });
    },

    deleteIncident: async (parent, { _id }) => {
      return Incident.findOneAndDelete({ _id });
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    updateAvailability: async (
      parent,
      {
        _id,
        username,
        mondayAm,
        mondayPm,
        tuesdayAm,
        tuesdayPm,
        wednesdayAm,
        wednesdayPm,
        thursdayAm,
        thursdayPm,
        fridayAm,
        fridayPm,
        saturdayAm,
        saturdayPm,
        sundayAm,
        sundayPm,
      },
      context
    ) => {
      // if (context.user) {
      return User.findOneAndUpdate(
        { _id },
        {
          availability: {
            mondayAm,
            mondayPm,
            tuesdayAm,
            tuesdayPm,
            wednesdayAm,
            wednesdayPm,
            thursdayAm,
            thursdayPm,
            fridayAm,
            fridayPm,
            saturdayAm,
            saturdayPm,
            sundayAm,
            sundayPm,
          },
        },
        { new: true }
      );
      // }
      // throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
