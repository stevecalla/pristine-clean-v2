const db = require('../config/connection');

const { User } = require('../models');
const userSeeds = require('./userSeeds.json');

const { Location } = require('../models');
const locationSeeds = require('./locationSeeds.json');

// db.once("open", async () => {
//   await Location.deleteMany({});
//   await Location.create(locationSeeds);

//   console.log("location seed done!");
//   // process.exit(0);
// });

// db.once("open", async () => {
//   await User.deleteMany({});
//   await User.create(userSeeds);

//   console.log("user seed done!");

//   //section
//   process.exit(0);
// });

db.once('open', async () => {
  try {
    await Location.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);
    await Location.create(locationSeeds);

    // for (let i = 0; i < locationSeeds.length; i++) {

    //   const { _id, businessName } = await Location.create(locationSeeds[i]);
    //   console.log(_id, businessName);
    //   const user = await User.updateMany(

    //     { locations: businessName },
    //     {
    //       $addToSet: {
    //         locations: [_id],
    //       },

    //     },
    //     { new: true }

    //   );
    // }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
