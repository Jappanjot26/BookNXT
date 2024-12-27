const { signup, login } = require("../Controllers/AuthController");
const {
  signupValidation,
  loginValidation,
} = require("../Middlewares/AuthValidation");
const UserModel = require("../Models/User");

const router = require("express").Router();

router.post("/login", loginValidation, login);

router.post("/signup", signupValidation, signup);

router.post("/save", async (req, _) => {
  const { email, saved } = req.body;
  await UserModel.findOneAndUpdate(
    { email },
    { $set: { saved } },
    { upsert: true, new: true }
  );
});

module.exports = router;
