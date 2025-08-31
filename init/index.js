if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const dbUrl = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  // await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
  await mongoose.connect(dbUrl);
}

// const initDB = async () => {
//   await Listing.deleteMany({});
//   initData.data = initData.data.map((obj) => ({
//     ...obj,
//     owner: "68b006683805a4aa17c91f62",
//   }));
//   await Listing.insertMany(initData.data);
//   console.log("data was initialized");
// };

const initDB = async () => {
  try {
    // Insert new listings from our dataset
    await Listing.insertMany(initData.data); // indianListings is the array we created earlier

    console.log("Database initialized with new listings");
  } catch (err) {
    console.error("Error initializing database:", err);
  }
};

initDB();
