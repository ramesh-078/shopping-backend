const express = require("express");
const { signup, login } = require("../conttrollers/userController");

const router = express.Router();

router.post("/signup", signup); //this is user route
router.post("/login",login);
module.exports = router;
