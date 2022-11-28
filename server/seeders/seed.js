const db = require("../config/connection");

const { User } = require("../models");
const userSeeds = require("./userSeeds.json");

const { Thought } = require("../models");
const thoughtSeeds = require("./thoughtSeeds.json");

const { Location } = require("../models");
const locationSeeds = require("./locationSeeds.json");

db.once("open", async () => {
  await Thought.deleteMany({});
  await Thought.create(thoughtSeeds);

  console.log("thought seed done!");
  // process.exit(0);
});

db.once("open", async () => {
  await Location.deleteMany({});
  await Location.create(locationSeeds);

  console.log("location seed done!");
  // process.exit(0);
});

db.once("open", async () => {
  await User.deleteMany({});
  await User.create(userSeeds);

  console.log("user seed done!");

  //section
  process.exit(0);
});
