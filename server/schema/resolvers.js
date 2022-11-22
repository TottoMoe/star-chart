const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/aut");
const { User, Event, Booking } = require("../models");

const events = async (eventIds) => {
  try {
    const events = await Event.find({ _id: { $in: eventIds } });
    events.map((event) => {
      return {
        ...event._doc,
        _id: event.id,
        date: new Date(event._doc.date).toISOString(),
        creator: user.bind(this, event.creator),
      };
    });
    return events;
  } catch (err) {
    throw err;
  }
};

const user = async (userId) => {
  try {
    const user = await User.findById(userId);
    return {
      ...user._doc,
      _id: user.id,
      createdEvents: events.bind(this, user._doc.createdEvents),
    };
  } catch (err) {
    throw err;
  }
};

const singleEvent = async (eventId) => {
  try {
    const event = await Event.findById(eventId);
    return {
      ...event._doc,
      _id: event.id,
      creator: user.bind(this, event.creator),
    };
  } catch (err) {
    throw err;
  }
};

const transformEvent = (event) => {
  return {
    ...event._doc,
    _id: event.id,
    date: dateToString(event._doc.date),
    creator: user.bind(this, event.creator),
  };
};

const transformBooking = (booking) => {
  return {
    ...booking._doc,
    _id: booking.id,
    user: user.bind(this, booking._doc.user),
    event: singleEvent.bind(this, booking._doc.event),
    createdAt: dateToString(booking._doc.createdAt),
    updatedAt: dateToString(booking._doc.updatedAt),
  };
};

const resolvers = {
  Query: {
    // get all the users
    users: async () => {
      // TODO: Do we also need to return the user's Events?
      return await User.find({});
    },

    // get all the events
    events: async () => {
      const events = await Event.find();
      return events.map((event) => {
        return {
          ...event._doc,
          _id: event.id,
          date: new Date(event._doc.date).toISOString(),
          creator: user.bind(this, event._doc.creator),
        };
      });
    },

    // get all the bookings
    bookings: async () => {
      const bookings = await Booking.find();
      return bookings.map((booking) => {
        return {
          ...booking._doc,
          _id: booking.id,
          user: user.bind(this, booking._doc.user),
          event: singleEvent.bind(this, booking._doc.event),
          createdAt: new Date(booking._doc.createdAt).toISOString(),
          updatedAt: new Date(booking._doc.updatedAt).toISOString(),
        };
      });
    },
  },

  Mutations: {
    // Create an event to
    createEvent: async (args, req) => {
      if (!req.isAuth) {
        throw new AuthenticationError("Can't find this user");
      }
      const event = new Event({
        title: args.eventInput.title,
        description: args.eventInput.description,
        date: new Date(args.eventInput.date),
        creator: req.userId,
      });
      let createdEvent;
      try {
        const result = await event.save();
        createdEvent = transformEvent(result);
        const creator = await User.findById(req.userId);

        if (!creator) {
          throw new Error("User not found.");
        }
        creator.createdEvents.push(event);
        await creator.save();

        return createdEvent;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },

    // Create an user to the data base
    createUser: async (parent, args, context) => {
      const existingUser = await User.findOne({ email: args.userInput.email });
      if (existingUser) {
        throw new Error("User exists already.");
      }
      const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

      const user = new User({
        email: args.userInput.email,
        password: hashedPassword,
      });

      const result = await user.save();

      return { ...result._doc, password: null, _id: result.id };
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

    // make the booking to the eventDB
    bookEvent: async (args, req) => {
      if (!req.isAuth) {
        throw new AuthenticationError("Your need to be logged in!");
      }
      const fetchedEvent = await Event.findOne({ _id: args.eventId });
      const booking = new Booking({
        user: req.userId,
        event: fetchedEvent,
      });
      const result = await booking.save();
      return transformBooking(result);
    },

    // remove a booking from eventDB
    cancelBooking: async (args, req) => {
      if (!req.isAuth) {
        throw new AuthenticationError("Your need to be logged in!");
      }
      try {
        const booking = await Booking.findById(args.bookingId).populate(
          "event"
        );
        const event = transformEvent(booking.event);
        await Booking.deleteOne({ _id: args.bookingId });
        return event;
      } catch (err) {
        throw err;
      }
    },
  },
};

module.exports = resolvers;
