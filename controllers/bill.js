const model = require("../models");
const response = require("../helpers/response");

const index = async (req, res) => {
  try {
    const bills = await model.Bill.findAll({ include: "class" });
    await response(res, true, 200, "Operation Success", bills);
  } catch (err) {
    await response(res, false, 500, err.message);
  }
};

const store = async (req, res) => {
  try {
    const { registrant_id, email, phone, socmed, class_id } = req.body;
    const bill = await model.Bill.create({
      registrant_id,
      email,
      phone,
      socmed,
      class_id
    });
    if (bill) {
      await response(res, false, 201, "Bill stored!", bill);
    }
  } catch (err) {
    await response(res, false, 500, err.message);
  }
};

const show = async (req, res) => {
  try {
    const bill = await model.Bill.findOne({
      where: { id: req.params.id },
      include: "class"
    });
    await response(res, true, 200, "Operation Success", bill);
  } catch (err) {
    await response(res, false, 500, err.message);
  }
};

const update = async (req, res) => {
  try {
    const { name, email, phone, socmed, class_id } = req.body;
    const bill = await model.Bill.update(
      {
        name,
        email,
        phone,
        socmed,
        class_id
      },
      { where: { id: req.params.id } }
    );
    await response(res, true, 200, "update success", bill);
  } catch (err) {
    await response(res, false, 500, err.message);
  }
};

const destroy = async (req, res) => {
  try {
    const destroy = await model.Bill.delete({ where: { id: req.params.id } });
    if (destroy) {
      await response(res, true, 200, "delete success");
    }
  } catch (err) {
    await response(res, false, 500, err.message);
  }
};

module.exports = {
  index,
  store,
  show,
  update,
  destroy
};
