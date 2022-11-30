const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
// const { User, Event, Booking } = require("../models");
const { User, Event } = require("../models");

const resolvers = {
  Query: {
    // Get a single User
    me: async (parent, args, context) => {
      if (context.user) {
        const foundUser = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return foundUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("createdEvents");
    },
    // Get all Users
    users: async () => {
      return User.find({}).populate("createdEvents");
    },
    // Get a single event
    event: async (parent, { eventId }) => {
      return Event.findOne({ _id: eventId });
    },
    // Get all events
    events: async () => {
      // return await Event.find({}).populate("bookings").populate({
      //   path: "bookings",
      // });
      return Event.find({});
    },
    // Get all events for a specific user
    userEvents: async (parent, { username }) => {
      return Event.find({ creator: username });
    },
    // Get all bookings from one event
    // bookings: async () => {
    //   return await Booking.find({}).populate("user");
    // },
  },

  Mutation: {
    // Create an event
    // The `creator` argument must be an ID to an existing User reference
    createEvent: async (parent, { title, description, date, creator }) => {
      const event = await Event.create({ title, description, date, creator });

      console.log("Created event: ", event);

      // Add the event to the User's list of events
      const user = await User.findOneAndUpdate(
        { username: creator },
        { $addToSet: { createdEvents: { _id: event.id } } },
        { new: true, runValidators: true }
      );
      console.log("Updated user: ", user);

      // const token = signToken(event);
      return event;
    },
    // Create an user
    createUser: async (parent, args, context) => {
      const user = await User.create(args);

      if (!user) {
        return console.error("Could not create user from args ", args);
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
    //   // add a booking to the event
    //   bookEvent: async (parent, { eventId, booking }) => {
    //     return Event.findOneandUpdate(
    //       { _id: eventId },
    //       { $addToSet: { bookings: booking } },
    //       { new: true, runValidators: true }
    //     );
    //   },
    //   // remove the booking from the event
    //   cancelBooking: async (parent, args, context) => {
    //     const booking = await Booking.findById(args.bookingId).populate("event");
    //     await Booking.deleteOne({ _id: args.bookingId });

    //     return Event.findOneandUpdate(
    //       { _id: eventId },
    //       { $pull: { bookings: booking } },
    //       { new: true }
    //     );
    //   },
  },
};

module.exports = resolvers;
