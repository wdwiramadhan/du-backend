const model = require("../models");
const response = require("../helpers/response");

const index = async (req, res) => {
  try {
    const classes = await model.Class.findAll();
    await response(res, 200, true, "Operation Success", classes);
  } catch (err) {
    await response(res, 500, false, err.message);
  }
};

const store = async (req, res) => {
  try {
    const { name, capacity, speaker } = req.body;
    const create = await model.Class.create({
      name,
      capacity,
      speaker
    });
    if (create) {
      await response(res, true, 201, "Created success", create);
    }
  } catch (err) {
    await response(res, false, 500, err.message);
  }
};

module.exports = {
  index,
  store
};
