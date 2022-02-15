const router = require("express").Router();
const { User } = require("../models");

// user controllers
const userController = {
  // get all users
  getAllUsers(req, res) {
    User.find({})
      .select("-__v")
      .sort({ __id: -1 })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // route to login
  
  // route to update user
  // route to delete user

};

module.exports = userController;
