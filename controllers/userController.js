const User = require("../models/user");
exports.createUser = async (req, res) => {
  const user = new User({
    name: req.body.name,
    phone: req.body.phone,
    imageUrl: req.body.imageUrl,
  });
  console.log("req---------", req.body);
  try {
    const u1 = await user.save();
    res.status(400).json(u1);
  } catch (err) {
    res.send("Error");
  }
};

exports.listUser = async (req, res) => {
  console.log("coming call");
  try {
    const user = await User.find();
    console.log("user-----", user);
    res.status(400).json(user);
  } catch (err) {
    res.send("Error");
  }
};

exports.updateUser = async (req, res) => {
  console.log(" req.params.phone---", req.params.id);
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      name: req.body.nmae,
      phone: req.body.phone,
    });

    res.json(user);
  } catch (err) {
    res.send("Error");
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id).then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "user not found with id " + req.params.id,
        });
      }
      res.json(user);
    });
  } catch (err) {
    res.send("Error");
  }
};
