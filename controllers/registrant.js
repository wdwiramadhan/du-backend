const model = require("../models");
const response = require("../helpers/response");
const bcrypt = require("bcrypt");

const store = async (req, res) => {
  try {
    const { name, email, phone, socmed, class_id } = req.body;
    const registrant = await model.Registrant.create({
      name,
      email,
      phone,
      socmed,
      class_id
    });
    if (registrant) {
      await response(res, false, 201, "Register Succcess", registrant);
    }
  } catch (err) {
    await response(res, false, 500, err.message);
  }
};

const show = async (req, res) => {
  try {
    const registrant = await model.User.findOne({
      where: { id: req.params.id }
    });
    await response(res, true, 200, "Operation Success", registrant);
  } catch (err) {
    await response(res, false, 500, err.message);
  }
};

const update = async (req, res) => {
  try {
    const { name, email, phone, socmed, class_id } = req.body;
    const registrant = await model.User.update(
      {
        name,
        email,
        phone,
        socmed,
        class_id
      },
      { where: { id: req.params.id } }
    );
    await response(res, true, 200, "update success", registrant);
  } catch (err) {
    await response(res, false, 500, err.message);
  }
};

const destroy = async (req, res) => {
  try {
    const destroy = await model.User.delete({ where: { id: req.params.id } });
    if (destroy) {
      await response(res, true, 200, "delete success");
    }
  } catch (err) {
    await response(res, false, 500, err.message);
  }
};

module.exports = {
  store,
  show,
  update,
  destroy
};
