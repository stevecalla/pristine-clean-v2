const db = require('../config/connection');
const { Thought } = require('../models');
const thoughtSeeds = require('./thoughtSeeds.json');
const { Location } = require('../models');
const locationSeeds = require('./locationSeeds.json');

db.once('open', async () => {
  await Thought.deleteMany({});
  await Thought.create(thoughtSeeds);

  console.log('all done!');
  process.exit(0);
});

db.once('open', async () => {
  await Location.deleteMany({});
  await Location.create(locationSeeds);

  console.log('all done!');
  process.exit(0);
});
