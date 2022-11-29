const db = require('./connection');
const { User, Booking, Event } = require('../models');

db.once('open', async () => {
  // clean database
  await Booking.deleteMany();
  await User.deleteMany();
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
      creator:'Patrick-Leo'
    },,
    {
      title:'Event Title 5',
      description:'Event 5 Description',
      date: '1669507244324',
      creator:'Dan-Shah'
    },
    {
      title:'Event Title 6',
      description:'Event 6 Description',
      date: '1669507244324',
      creator:'Robert-Molly'
    },
    {
      title:'Event Title 7',
      description:'Event 7 Description',
      date: '1669690385827',
      creator:'Robert-Molly'
    },
    {
      title:'Event Title 8',
      description:'Event 8 Description',
      date: '1669690385827',
      creator:'Dan-Shah'
    },
    {
      title:'Event Title 9',
      description:'Event 9 Description',
      date: '11669690385827',
      creator:'Peyton-Olson'
    },
    {
      title:'Event Title 10',
      description:'Event 10 Description',
      date: '1669690385827',
      creator:'jain-Jaya'
    },
    {
      title:'Event Title 11',
      description:'Event 11 Description',
      date: '1669690385827',
      creator:'kris-Olson'
    },
    {
      title:'Event Title 12',
      description:'Event 12 Description',
      date: '1669690385827',
      creator:'jain-Jaya'
    },
    {
      title:'Event Title 13',
      description:'Event 13 Description',
      date: '1669690385827',
      creator:'Peyton-Olson'
    },
    {
      title:'Event Title 14',
      description:'Event 14 Description',
      date: '1669690385827',
      creator:'Alberto-Harrison'
    },
    {
      title:'Event Title 15',
      description:'Event 15 Description',
      date: '1669690385827',
      creator:'kris-Olson'
    }
    {
      title:'Event Title 16',
      description:'Event 16 Description',
      date: '1669690385827',
      creator:'jain-Jaya'
    },
    {
      title:'Event Title 17',
      description:'Event 17 Description',
      date: '1669690385827',
      creator:'Cameron-Olson'
    },
    {
      title:'Event Title 18',
      description:'Event 18 Description',
      date: '1669690385827',
      creator:'Dan-Shah'
    },
    {
      title:'Event Title 19',
      description:'Event 19 Description',
      date: '1669690385827',
      creator:'Patrick-Leo'
    },
    {
      title:'Event Title 20',
      description:'Event 20 Description',
      date: '1669690385827',
      creator:'jain-Jaya'
    }
  ]);


  await User.create([
    {
    username: 'Alberto-Harrison',
    email: 'alberto@email.com',
    password: 'password1234'
    },
    {
      username: 'Cameron-Olson',
      email: 'cameron@gmail.com',
      password: '1234;'
    },
    {
      username: 'Robert-Molly',
      email: 'robert@gmail.com',
      password: 'asdfjkl;'
    },
    {
      username: 'Dan-Shah',
      email: 'dan@gmail.com',
      password: 'asdfjkl;'
    },
    {
      username: 'kris-Olson',
      email: 'kris@gmail.com',
      password: 'asdfjkl;'
    },
    {
      username: 'jain-Jaya',
      email: 'jain@gmail.com',
      password: 'asdfjkl;'
    },
    {
      username: 'Patrick-Leo',
      email: 'Leo@gmail.com',
      password: 'asdfjkl;'
    }
]);
  
await populateUserEvents();

async function populateUserEvents () {
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

  console.log('all done!');
  process.exit(0);
});