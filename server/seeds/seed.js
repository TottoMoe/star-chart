const { Types } = require("mongoose");
const db = require('../config/connection');
const { User, Event } = require('../models');
const userData = require('./userData.json');
const eventData = require('./eventData.json');

async function populateUserEvents (eventData) {
  // console.log("event: ", event);
  const events = await Event.find({});
  console.log("Events: ", events);
  for (const event of events) {
    const user = await User.findOneAndUpdate(
      { username: event.creator },
      // { $addToSet: {createdEvents: { _id: event.id }}},
      { $addToSet: {createdEvents: {_id: event._id} } },
      { new: true, runValidators: true }
    )
    console.log("Updated User: ", user);
  };
}

db.once('open', async () => {
  // clean database
  await User.deleteMany({});
  await Event.deleteMany({});

  // bulk create each model
  await User.insertMany(userData);
  await Event.insertMany(eventData);

  await populateUserEvents(eventData);

  console.log('all done!');
  process.exit(0);
});
