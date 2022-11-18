const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/aut");
const { User, Appointment } = require("../models");

const resolvers = {
  Query: {
    // get a signle user bt their user id
    me: async (parent, args, context) => {
      if (context.user) {
        const foundUser = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        ); // what is this select for?
        return foundUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutations: {
    // Create an user to the data base
    addUser: async (parent, args, context) => {
      const user = await User.create(args);

      if (!user) {
        return console.error("Something is wrong!");
      }
      const token = signToken(user);
      return { token, user };
    },

    // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Can't find this user");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        return console.error("Wrong password!");
      }
      const token = signToken(user);
      return { token, user };
    },

    // save an appointment to a user's 'details' field by adding it to set (to prevent duplicates)
    saveAppointment: async (parent, { appointment }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedAppointments: appointment } },
          { new: true }
        );
      }
      throw new AuthenticationError("Your need to be logged in!");
    },

    // remove a appointment from 'savedAppointments'
    removeAppointment: async (parent, { appointmentId }, context) => {
      if (context.user) {
        const updateUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { saveAppointment: { appointmentId: appointmentId } } },
          { new: true }
        );
        console.log(updateUser);
        return updateUser;
      }
      throw new AuthenticationError("Your need to be logged in!");
    },
  },
};

module.exports = resolvers;
