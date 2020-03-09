const model = require("../models");
const response = require("../helpers/response");

const index = async (req, res) => {
  try {
    const registrants = await model.Registrant.findAll({ include: "class" });
    await response(res, true, 200, "Operation Success", registrants);
  } catch (err) {
    await response(res, false, 500, err.message);
  }
};

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
    const bill = {
      registrant_id: registrant.id,
      price: 30000,
      status: 'Belum Bayar'
    }
    const registBill = await model.Bill.create(bill)
    if (registrant) {
      await response(res, false, 201, "Register Succcess", registrant);
    }
  } catch (err) {
    await response(res, false, 500, err.message);
  }
};

const show = async (req, res) => {
  try {
    const registrant = await model.Registrant.findOne({
      where: { id: req.params.id },
      include: "class"
    });
    await response(res, true, 200, "Operation Success", registrant);
  } catch (err) {
    await response(res, false, 500, err.message);
  }
};

const update = async (req, res) => {
  try {
    const { name, email, phone, socmed, class_id } = req.body;
    const registrant = await model.Registrant.update(
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
    const destroy = await model.Registrant.delete({ where: { id: req.params.id } });
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
