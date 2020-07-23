const User = require("../Models/User.Model");
const { createUser } = require("./createUser");

const copyUser = (req, res) => {
  User.findById(req.params._id)
    .then((data) => {
      if (data) {
        req.body.firstName = data.firstName;
        req.body.lastName = data.lastName;
        req.body.email = data.email;
        req.body.phone = data.phone;
        req.body.Address = data.Address;
        createUser(req, res);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = copyUser;
