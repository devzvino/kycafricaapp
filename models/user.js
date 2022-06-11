const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  idNumber: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
  },
  idFrontImage: {
    type: String,
  },
  idBackIamge: {
    type: String,
  },
  homeAddress: {
    type: Array,
  },
  workAddress: {
    type: Array,
  },
});

userSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

userSchema.set("toJSON", {
  virtuals: true,
});

exports.User = mongoose.model("User", userSchema);
exports.userSchema = userSchema;
