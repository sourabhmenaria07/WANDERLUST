const Listing = require("../models/listing");
const ExpressError = require("../utils/ExpressError");
const { config, geocoding } = require("@maptiler/client");
const { cloudinary } = require("../cloudConfig.js");
config.apiKey = process.env.MAP_API_KEY;

module.exports.index = async (req, res) => {
  const q = (req.query.q || "").trim();
  const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
  const limit = 10;
  const skip = (page - 1) * limit;

  let query = {};
  let projection = {};
  let sort = {};
  // let sort = { createdAt: -1 };

  if (q) {
    query = { $text: { $search: q } };
    projection = { score: { $meta: "textScore" } };
    sort = { score: { $meta: "textScore" } };
  }

  const total = await Listing.countDocuments(query);
  const listings = await Listing.find(query, projection)
    .sort(sort)
    .skip(skip)
    .limit(limit)
    .lean();

  const pages = Math.max(Math.ceil(total / limit), 1);
  res.render("listings/index", { listings, search: q, page, pages, total });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res) => {
  let location = req.body.listing.location;
  const result = await geocoding.forward(location, { limit: 1 });

  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };

  newListing.geometry = result.features[0].geometry;

  let savedListing = await newListing.save();
  console.log(savedListing);
  req.flash("success", "New Listing Created");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }
  res.render("listings/edit.ejs", { listing });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(
    id,
    { ...req.body.listing },
    { runValidators: true }
  );

  if (req.file) {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Listing Updated");
  res.redirect(`/listings/${id}`);
};

module.exports.destoryListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  if (deletedListing?.image?.filename) {
    await cloudinary.uploader.destroy(deletedListing.image.filename);
  }
  console.log(deletedListing);
  req.flash("success", "Listing Deleted");
  res.redirect("/listings");
};
