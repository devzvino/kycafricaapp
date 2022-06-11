const { User } = require("../models/user");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// get: get all users
router.get("/", async (req, res) => {
  const allUsers = await User.find().select("-otp");

  if (!allUsers) {
    res.status(500).json({ success: false });
  }
  res.status(200).send(allUsers);
});

// get: get single user with id from prams
router.get("/:id", async (req, res) => {
  const singleUser = await User.findById(req.params.id).select("-otp");

  if (!singleUser) {
    res
      .status(500)
      .json({ success: false, message: "sorry user was not found" });
  }

  res.status(200).send(singleUser);
});

// post: create new user
router.post("/register", async (req, res) => {
  let newUser = new User({
    firstName: req.body.firstName,
    surname: req.body.surname,
    phone: req.body.phone,
    idNumber: req.body.idNumber,
    phone: req.body.phone,
    otp: req.body.otp,
    idFrontImage: req.body.idFrontImage,
    idBackIamge: req.body.idBackIamge,
    homeAddress: req.body.homeAddress,
    workAddress: req.body.workAddress,
  });
  newUser = await newUser.save();

  if (!newUser) return res.status(400).send("the user can't be created");

  res.send(newUser);
});

// post /login
router.post("/login", async (req, res) => {
  const user = await User.findOne({ phone: req.body.phone });
  const secret = process.env.secret;
  const userOtp = req.body.otp;

  if (!user) {
    res.status(400).send("The user not found");
  }

  const comparedOtp = async (userOtp) => {
    // compared value
  };

  //! make sure to refactor this code for Otp
  if (user && comparedOtp) {
    const token = jwt.sign(
      {
        userId: user.id,
        isAdmin: user.isAdmin,
      },
      secret,
      { expiresIn: "4w" }
    );
    res.status(200).send({ user: user, token: token });
  } else {
    res.status(400).send("OTP is wrong");
  }
});

// update user infomation
router.put("/:id", async (req, res) => {
  const userExist = await User.findById(req.params.id);
  let newPassword;
  if (req.body.password) {
    newPassword = bcrypt.hashSync(req.body.password, 10);
  } else {
    newPassword = userExist.passwordHash;
  }

  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
      passwordHash: newPassword,
      phone: req.body.phone,
      isAdmin: req.body.isAdmin,
      street: req.body.street,
      apartment: req.body.apartment,
      zip: req.body.zip,
      city: req.body.city,
      country: req.body.country,
    },
    { new: true }
  );

  if (!user) return res.status(400).send("the user cannot be created!");

  res.send(user);
});

// get count of users
router.get("/get/count", async (req, res) => {
  const userCount = await User.countDocuments();

  if (!userCount) {
    res.status(500).json({ success: false });
  }
  res.send({
    userCount: userCount,
  });
});

// delete user
router.delete("/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then((user) => {
      if (user) {
        return res
          .status(200)
          .json({ success: true, message: "User has been deleted" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
});

// end now export router
module.exports = router;
