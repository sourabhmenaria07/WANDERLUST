const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

app.get("/listings/:id", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

app.post("/listings", async (req, res) => {
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  console.log(newListing);
  res.redirect("/listings");
});

app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
});

app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(
    id,
    { ...req.body.listing },
    { runValidators: true }
  );
  res.redirect(`/listings/${id}`);
});

app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
});

// app.get("/", (req, res) => {
//   res.send("home root working");
// });

// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My new vila",
//     description: "By the beach",
//     price: 12000,
//     location: "Calangute, Goa",
//     country: "India",
//   });
//   await sampleListing.save();
//   console.log("sample was saved");
//   res.send("successful testing");
// });

app.listen(8000, () => {
  console.log("Server is listening");
});
