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
      { $addToSet: {createdEvents: {_id: event._id} } },
      { new: true, runValidators: true }
    )
    console.log("Updated User: ", user);
  };
}

db.once('open', async () => {

  await Event.insertMany(eventData);

  await populateUserEvents(eventData);

  try {
    await User.deleteMany({});
    await Event.deleteMany({});

    await User.insertMany(userData);
    await Event.insertMany(eventData);

    await populateUserEvents(eventData);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
