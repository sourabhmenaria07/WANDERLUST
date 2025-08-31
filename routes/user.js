const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl, isGuest } = require("../middleware.js");

const userController = require("../controllers/users.js");

router
  .route("/signup")
  .get(isGuest, userController.renderSignupForm)
  .post(wrapAsync(userController.signup));

router
  .route("/login")
  .get(isGuest, userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.login
  );

router.get("/logout", userController.logout);

module.exports = router;
