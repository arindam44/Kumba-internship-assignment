const User = require("../Models/User.Model");

const getOneUser = (req, res) => {
  User.findById(req.params._id)
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = getOneUser;
