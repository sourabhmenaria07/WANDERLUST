const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(passportLocalMongoose, { usernameField: "email" }); // for make it take eamil as username

module.exports = mongoose.model("User", userSchema);
