const model = require("../models");
const response = require("../helpers/response");

const index = async (req, res) => {
  try {
    const registrants = await model.Registrant.findAll({ include: "class" });
    return await response(res, true, 200, "Operation Success", registrants);
  } catch (err) {
    return await response(res, false, 500, err.message);
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
    const billDocument = {
      registrant_id: registrant.id,
      price: 30000,
      status: 'Belum Bayar'
    }
    const bill = await model.Bill.create(billDocument);
    if (registrant) {
      return await response(res, false, 201, "Register Succcess", {registrant: registrant, bill: bill});
    }
  } catch (err) {
    return await response(res, false, 500, err.message);
  }
};

const show = async (req, res) => {
  try {
    const registrant = await model.Registrant.findOne({
      where: { id: req.params.id },
      include: "class"
    });
    if(registrant == null) {
      return await response(res, true, 404, "Get Registrant id "+req.params.id+" Not exist", registrant);  
    }
    return await response(res, true, 200, "Get Registrant id "+req.params.id+" Success", registrant);
  } catch (err) {
    return await response(res, false, 500, err.message);
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
    return await response(res, true, 200, "update success", registrant);
  } catch (err) {
    return await response(res, false, 500, err.message);
  }
};

const destroy = async (req, res) => {
  try {
    const destroy = await model.Registrant.delete({ where: { id: req.params.id } });
    if (destroy) {
      return await response(res, true, 200, "delete success");
    }
  } catch (err) {
    return await response(res, false, 500, err.message);
  }
};

const findByEmail = async (req, res) => {
  try {
    const registrant = await model.Registrant.findAll({
      where: { email: req.body.email },
    });
    return await response(res, true, 200, "get Registrant success", registrant)
  } catch (err) {
    return await response(res, false, 500, err.message);
  }
}
module.exports = {
  index,
  store,
  show,
  update,
  destroy,
  findByEmail
};
