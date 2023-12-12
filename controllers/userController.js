const User = require("../models/User");
const bcrypt = require("bcrypt");

const userController = {
  createUser: async (req, res) => {
    try {
      const { username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ username, password: hashedPassword });
      res.status(200).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  getUserList: async (req, res) => {
    try {
      const userList = await User.find();
      res.json(userList);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  getUserDetails: async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  updateUserDetails: async (req, res) => {
    try {
      const { username, password } = req.body;
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        { username, password },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).send('User not found');
      }
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.userId);
      if (!deletedUser) {
        return res.status(404).send('User not found');
      }
      res.json(deletedUser);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  getAdminUserList: async (req, res) => {
    try {
      const userList = await User.find();
      res.json(userList);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};

module.exports = userController;
