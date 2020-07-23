const router = require("express").Router();
const createUser = require("../Modules/createUser");
const getAllUsers = require("../Modules/getAllUsers");
const getOneUser = require("../Modules/getOneUser");
const deleteOneUser = require("../Modules/deleteOneUser");
const copyUser = require("../Modules/copyUser");
const updateUser = require("../Modules/updateUser");

//Create User
router.route("/create").post(createUser);

//Update user
router.route("/user/:_id").patch(updateUser);

//Get all users
router.route("/users").get(getAllUsers);

//Find user
router.route("/user/:_id").get(getOneUser);

//Delete user
router.route("/user/:_id").delete(deleteOneUser);

//Create a copy
router.route("/user/:_id").copy(copyUser);

module.exports = router;
