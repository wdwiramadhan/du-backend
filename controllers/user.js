const {User} = require("../models");
const response = require("../helpers/response");
const bcrypt = require("bcrypt");

exports.create = async (req, res) => {
  try {
    const { name, email, role, password } = req.body;
    const user = await User.create({
      name,
      email,
      role,
      password: bcrypt.hashSync(password, 10)
    });
    await response(res, true, 201, "User successfully created", user);
  } catch (err) {
    await response(res, false, 500, err.message, null);
  }
};

exports.getAll = async (req, res) => {
  try {
    const users = await User.findAll();
    await response(res, true, 200, "success", users);
  } catch (err) {
    await response(res, false, 500, err.message, null);
  }
};

exports.getById = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    await response(res, true, 200, "success", user);
  } catch (err) {
    await response(res, false, 500, err.message, null);
  }
};

exports.update = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, email, role, password } = req.body;
    const user = await User.update(
      {
        name,
        email,
        role,
        password: bcrypt.hashSync(password, 10)
      },
      { where: { id: userId } }
    );
    await response(res, true, 200, "User successfully updated", user);
  } catch (err) {
    await response(res, false, 500, err.message, null);
  }
};

exports.delete = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.destroy({ where: { id: userId } });
    await response(res, true,200, "User successfully deleted", null);
  } catch (err) {
    await response(res, false,500, err.message, null);
  }
};
