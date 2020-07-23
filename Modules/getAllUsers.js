const User = require("../Models/User.Model");

const getAllUsers = (req, res) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

module.exports = getAllUsers;
