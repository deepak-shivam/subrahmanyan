const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')



module.exports = {
  userRegister: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      //check whether person have already registerd or not
      const isExist = await User.findOne({ email });
      if (isExist) {
        return res
          .status(403)
          .json({ success: false, message: "User already exist" });
      }
      //hash the password
      let hashedPassword;
      hashedPassword = await bcrypt.hash(password, 10);
      const user = await new User({
        name,
        email,
        password: hashedPassword,
      });
      await user.save();
      return res
        .status(201)
        .json({
          success: true,
          message: "User registered successfully",
          response: { name: user.name, email: user.email, _id: user._id },
        });
    } catch (err) {
      console.log("Error in userRegister");
    }
  },
  userLogin: async (req, res) => {
      try {
          const { email, password } = req.body
          const isExist = await User.findOne({ email })
          if (!isExist) {
              return res.status(404).json({success:false, message:"Given email doesnt exist"})
          }
          const isCorrect = bcrypt.compare(password, isExist.password)
          if (!isCorrect) {
              return res.status(400).json({ success: false, message:"Invalid credentials"})
          }
          const payload = {
              _id: isExist.id,
              name: isExist.name,
              email: isExist.email
          }
          jwt.sign(payload, keys.secretKey, { expiresIn: 7200 }, (err, token) => {
              res.status(200).json({
                  message: "User logged in successfully",
                  success: true,
                  token: 'Bearer ' + token
              });
          })

    } catch (err) {
      console.log("Error in userLogin");
    }
  },
};
