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
      title:'sample',
      description:'sample',
      date: new Date(),
      creator:'sample'

    }
  ]);

  await User.deleteMany();

  await User.create({
    username: 'Alberto-Harrison',
    email: 'alberto@email.com',
    password: 'password1234'
 });
  

  console.log('all done!');
  process.exit(0);
});
