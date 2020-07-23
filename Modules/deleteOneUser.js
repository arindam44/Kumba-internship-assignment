const User = require("../Models/User.Model");

const deleteOneUser = (req, res) => {
  User.findByIdAndDelete(req.params._id)
    .then((data) => {
      if (data) {
        res.status(200).json({ message: "User deleted successfylly" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => res.status(500).json(err));
};

module.exports = deleteOneUser;
