const User = require("../Models/User.Model");

const updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params._id, req.body, { new: true })
    .then((user) => {
      if (user) {
        res.status(200).json({ message: "Updated Successfully", user: user });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => res.status(500).json(err));
};

module.exports = updateUser;
