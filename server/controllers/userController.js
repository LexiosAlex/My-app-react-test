import userModel from "../models/user.js";

export const loginUser = (req, res) => {
  if (!req.body.userName) {
    return res.status(400).send({
      success: "false",
      message: "userName is required"
    });
  } else if (!req.body.password) {
    return res.status(400).send({
      success: "false",
      message: "password is required"
    });
  }
  userModel
    .findOne({ userName: req.body.userName }, { password: req.body.password })
    .exec((err, user) => {
      if (err) {
        res.status(404).send({
          success: "false",
          message: "no user found"
        });
      }

      res.status(200).send({
        success: "true",
        message: "user login success",
        user: user
      })
    });
};
