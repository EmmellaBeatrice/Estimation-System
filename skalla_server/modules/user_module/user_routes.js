//requiring dependecies
const express = require("express");
const router = express.Router();
const userController = require("./userController");
const loginController = require("./loginController");

//All users routes

router.post("/user/userlogin", loginController.loginUser);
//get all users
router.get("/users", userController.usersList);

//get all projectManagers
router.get("/users/project-managers", userController.projectManagersList);

//get a single projectManager
router.get(
  "/users/project-manager/:requestId",
  userController.singleProjectManagerRequest
);

//get all developers
router.get("/users/developers", userController.developersList);

//get a single developer
router.get(
  "/users/developer/:requestId",
  userController.singleDeveloperRequest
);

module.exports = router;
