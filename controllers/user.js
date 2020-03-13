const model = require("../models");
const response = require("../helpers/response");
const bcrypt = require("bcrypt");

const store = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await model.User.create({
      name,
      email,
      password: bcrypt.hashSync(password, 8)
    });
    return await response(res, true, 201, "User successfully created", user);
  } catch (err) {
    return await response(res, false, 500, err.message, null);
  }
};

const index = async (req, res) => {
  try {
    const users = await model.User.findAll();
    return await response(res, true, 200, "success", users);
  } catch (err) {
    return await response(res, false, 500, err.message, null);
  }
};

const show = async (req, res) => {
  try {
    const user = await model.User.findOne({ where: { id: req.params.id } });
    return await response(res, true, 200, "success", user);
  } catch (err) {
    return await response(res, false, 500, err.message, null);
  }
};

const update = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, email, password } = req.body;
    const user = await model.User.update(
      {
        name,
        email, 
        password: bcrypt.hashSync(password, 8)
      },
      { where: { id: userId } }
    );
    return await response(res, true, 200, "User successfully updated", user);
  } catch (err) {
    return await response(res, false, 500, err.message, null);
  }
};

const destroy = async (req, res) => {
  try {
    const userId = req.params.id;
    await model.User.destroy({ where: { id: userId } });
    return await response(res, true, 200, "User successfully deleted", null);
  } catch (err) {
    return await response(res, false, 500, err.message, null);
  }
};

module.exports = {
  index,
  store,
  show,
  update,
  destroy
};
