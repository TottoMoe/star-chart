const { Schema, model } = require("mongoose");

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
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Event = model("Event", eventSchema);

module.exports = Event;
