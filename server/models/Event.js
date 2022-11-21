const { Schema } = require("mongoose");

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  dates: {
    type: Date,
    required: true,
  },

  creator: {
    type: Schema.Type.ObjectId,
    ref: "User",
  },
});

module.exports = eventSchema;
