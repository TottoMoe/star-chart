const { Schema } = require("mongoose");
const moment = require("moment");

const appointmentSchema = new Schema({
  users: [
    {
      type: String,
      require: true,
    },
  ],
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  appointmentId: {
    type: String, // should be Int or string
    required: true,
  },
  // We need to find out the dates array code
  dates: [
    {
      type: Date,
      default: Date.now,
      get: function (date) {
        return moment(date).format("mm/dd/yyyy");
      },
    },
  ],
  // We need to find out the times array code
  times: [
    {
      type: Time,
      default: Time.now,
      get: function (time) {
        return moment(time).format("hh:mm");
      },
    },
  ],
  duration: {
    type: String,
  },
  // Should we include Patient Count
});

module.exports = appointmentSchema;
