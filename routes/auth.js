
const express = require('express');
const router = express.Router();

const { signup, signin, signout, requireSignin } = require("../controllers/auth");
const { userSignupValidator } = require("../validator/index.js")

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

router.get("/hello", requireSignin, (req, res) => {
    console.log("Hello there");
});


module.exports = router;