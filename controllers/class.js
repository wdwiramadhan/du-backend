const model = require("../models");
const response = require("../helpers/response");

const index = async (req, res) => {
  try {
    const data = await model.Class.findAll();
    await response(res, true, 200, "Operation Success", data);
  } catch (err) {
    await response(res, false, 500, err.message);
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

const show = async (req, res) => {
  try {
    const data = await model.Class.findOne({
      where: { id: req.params.id }
    });
    await response(res, true, 200, "Operation Success", data);
  } catch (err) {
    await response(res, false, 500, err.message);
  }
};

const update = async(req, res) => {

}

const destroy = async(req, res) => {

}

module.exports = {
  index,
  store,
  show,
  update,
  destroy
};
