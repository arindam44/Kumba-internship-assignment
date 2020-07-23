const User = require("../Models/User.Model");
const counter = require("../Models/Counter.Model");

const createUser = (req, res) => {
  counter
    .findOne({ _id: "user" })
    .then((data) => {
      if (data !== null) {
        counter
          .findOneAndUpdate(
            { _id: "user" },
            { $inc: { seq: 1 } },
            { new: true }
          )
          .then((count) => {
            console.log(count.seq);
            saveUser(
              count.seq,
              req.body.firstName,
              req.body.lastName,
              req.body.email,
              req.body.phone,
              req.body.Address,
              res
            );
          })
          .catch((err) => console.error(err));
      } else {
        newSeq = new counter({
          _id: "user",
          seq: 1,
        });
        newSeq
          .save()
          .then(async (count) => {
            const newuser = await saveUser(
              count.seq,
              req.body.firstName,
              req.body.lastName,
              req.body.email,
              req.body.phone,
              req.body.Address,
              res
            );
          })
          .catch((err) => console.error(err));
      }
    })
    .catch((err) => console.log(err));
};

const saveUser = async (
  _id,
  firstName,
  lastName,
  email,
  phone,
  Address,
  res
) => {
  const newUser = new User({
    _id: _id.toString().padStart(6, "0"),
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    Address: Address,
  });
  newUser
    .save()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = createUser;
