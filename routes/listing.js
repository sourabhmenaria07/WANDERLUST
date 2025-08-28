const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController = require("../controllers/listings.js");

// const validateListing = (req, res, next) => {
//   let { error } = listingSchema.validate(req.body);
//   // let { error } = listingSchema.validate(req.body, { abortEarly: false }); //for all subsequent //consecutive error, to not stop on frst error(so details.map can be used)
//   // console.log(error);
//   if (error) {
//     // let errMsg = error.details[0].message;
//     // let errMsg = error.details.map((el) => el.message).join(" ,"); // so see all error if abortEarly is false
//     throw new ExpressError(400, error);
//   } else {
//     next();
//   }
// };

// index route all listings
//   "/listings",

router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    validateListing,
    wrapAsync(listingController.createListing)
  );

router.get("/new", isLoggedIn, listingController.renderNewForm);

router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destoryListing));

// edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

// router.get("/", wrapAsync(listingController.index));

// add new

// show listing route
//   "/listings/:id",
// router.get("/:id", wrapAsync(listingController.showListing));

// create route
// router.post(
//   "/",
//   isLoggedIn,
//   validateListing,
//   wrapAsync(listingController.createListing)
// );

// update route
// router.put(
//   "/:id",
//   isLoggedIn,
//   isOwner,
//   validateListing,
//   wrapAsync(listingController.updateListing)
// );

// DELETE Listing route
// router.delete(
//   "/:id",
//   isLoggedIn,
//   isOwner,
//   wrapAsync(listingController.destoryListing)
// );

module.exports = router;
