const express = require("express");

const { createUserController } = require("../controllers/userControllers");

const router = express.Router();

router.post("/", createUserController);

module.exports = router;
