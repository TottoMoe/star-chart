const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/aut");
const { User, Event, Booking } = require("../models");

const resolvers = {
  Query: {
    // Get all events
    events: async () => {
      return await Event.find({}).populate("bookings").populate({
        path: "bookings",
        populate: "user",
      });
    },
    // Get all bookings from one event
    bookings: async () => {
      return await Booking.find({}).populate("user");
    },
  },

  Mutation: {
    // Create an event
    createEvent: async (parent, { title, description, date, creator }) => {
      const event = await Event.create({ title, description, date, creator });

      const token = signToken(event);
      return { token, event };
    },
    // Create an user
    createUser: async (parent, args, context) => {
      const user = await User.create(args);

      if (!User) {
        return console.error("No User found!");
      }
      const token = signToken(user);
      return { token, user };
    },
    // Login
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
    // add a booking to the event
    bookEvent: async (parent, { eventId, booking }) => {
      return Event.findOneandUpdate(
        { _id: eventId },
        { $addToSet: { bookings: booking } },
        { new: true, runValidators: true }
      );
    },
    // remove the booking from the event
    cancelBooking: async (parent, args, context) => {
      const booking = await Booking.findById(args.bookingId).populate("event");
      await Booking.deleteOne({ _id: args.bookingId });

      return Event.findOneandUpdate(
        { _id: eventId },
        { $pull: { bookings: booking } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
