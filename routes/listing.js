const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {
  isLoggedIn,
  isOwner,
  validateListing,
  searchLimiter,
  validateObjectId,
} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { CloudinaryStorage } = require("../cloudConfig.js");
const upload = multer({ storage: new CloudinaryStorage() });

router
  .route("/")
  .get(searchLimiter, wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createListing)
  );

router.get("/new", isLoggedIn, listingController.renderNewForm);

router
  .route("/:id")
  .get(validateObjectId, wrapAsync(listingController.showListing))
  .put(
    validateObjectId,
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(
    validateObjectId,
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.destoryListing)
  );

router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;
