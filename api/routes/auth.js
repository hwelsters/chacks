const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const verify = require("../verifyToken");

const User = require("../models/User");

const passwordIsStrong = (password) => {
  let strongPassword = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
  );
  if (strongPassword.test(password)) return true;
  return false;
};

// REGISTER
router.post("/register", async (req, res) => {
  console.log("REGISTER");

  if (!passwordIsStrong(req.body.password)) {
    res
      .status(406)
      .json("The password does not meet all the strength requirements");
    return;
  }

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });

  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    if (err.keyPattern.email === 1)
      res.status(500).json("Email is already taken");
    if (err.keyPattern.username === 1)
      res.status(500).json("Username is already taken");
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  console.log("LOGIN");
  try {
    if (req.body.email == "" || req.body.password == "") {
      res.status(400).json("Invalid email or password");
      return;
    }

    console.log(req.body);
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).json("Invalid email or password");
      return;
    }
    console.log("USER" + user);

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (originalPassword != req.body.password) {
      res.status(401).json("Invalid email or password");
      return;
    }

    const accessToken = jwt.sign(
      { id: user._id.toString() },
      process.env.SECRET_KEY,
      // { expiresIn: "5d" }
    );

    const { password, ...info } = user._doc;
    res.status(200).json({ ...info, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put("/update/:id", verify, async (req, res) => {
  if (req.user && req.user.id === req.params.id) {
    if (req.body.password) {
      req.body.password = CryptoJS.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json("Profile successfully updated");
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

// DELETE
router.delete("/delete/:id", verify, async (req, res) => {
  if (req.user && req.user.id === req.params.id) {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User successfully deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

// GET MOST RECENT USERS
router.get("/recent", async (req, res) => {
  try {
    const recentUsers = await User.find().limit(10);

    const toReturn = recentUsers.map((item) => {
      return {
        username: item.username,
        profilePic: item.profilePic,
      };
    });
    console.log(toReturn);
    res.status(200).json(toReturn);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET USER DETAILS WITHOUT SENSITIVE DATA
router.get("/front/:username", async (req, res) => {
  console.log("GET USER DETAILS");
  console.log(req.params.username);
  try {
    const user = await User.findOne({ username: req.params.username });
    res.status(200).json(user);
    console.log(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
