const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat');

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    get: (timestamp) => dateFormat(timestamp),
  },
  creator: {
    type: String,
    required: true,
  },
});

const Event = model("Event", eventSchema);

module.exports = Event;
