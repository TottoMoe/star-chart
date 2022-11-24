// const { Schema, model } = require("mongoose");

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

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
    // TODO: default date?
  },

  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Event = model("Event", eventSchema);

module.exports = eventSchema;
