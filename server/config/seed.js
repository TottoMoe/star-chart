const db = require('./connection');
const { User, Booking, Event } = require('../models');

db.once('open', async () => {
  // clean database
  await Booking.deleteMany();

  const booking = await Booking.insertMany([
    {    }
  ]);

  await Event.deleteMany();

  const event = await Event.insertMany([
    {
      title:'Event Title 1',
      description:'Event 1 Description',
      date: '1669507083722',
      creator:'Alberto-Harrison'
    },
    {
      title:'Event Title 2',
      description:'Event 2 Description',
      date: '1669507090508',
      creator:'Alberto-Harrison'
    },
    {
      title:'Event Title 3',
      description:'Event 3 Description',
      date: '1669507193240',
      creator:'Peyton-Olson'
    },
    {
      title:'Event Title 4',
      description:'Event 4 Description',
      date: '1669507244324',
      creator:'Peyton-Olson'
    }
  ]);

  await populateUserEvents(Event);

  await User.deleteMany();

  await User.create([
    {
    username: 'Alberto-Harrison',
    email: 'alberto@email.com',
    password: 'password1234'
    },
    {
      username: 'Peyton-Olson',
      email: 'peyton@gmail.com',
      password: 'asdfjkl;'
    }
]);

async function populateUserEvents (Event) {
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

  // await User.create({
  //   username: 'Peyton-Olson',
  //   email: 'peyton@gmail.com',
  //   password: 'asdfjkl;'
  // });


  console.log('all done!');
  process.exit(0);
});