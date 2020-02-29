const model = require("../models");
const response = require("../helpers/response");

const index = async (req, res) => {
  try {
    const schedules = await model.Schedule.findAll();
    await response(res, true, 200, "Operation success", schedules);
  } catch (err) {
    await response(res, false, 500, err.message);
  }
};

const store = async (req, res) => {
  try {
    const { class_id, name, start, end, place } = req.body;
    const create = await model.Schedule.create({
      class_id: class_id,
      name: name,
      start: start,
      end: end,
      place: place
    });
    await response(res, true, 200, "Schedule created", create);
  } catch (err) {
    await response(res, false, 500, err.message);
  }
};

const show = async (req, res) => {
  try {
    const schedule = await model.Schedule.findOne({
      where: { id: req.params.id }
    });
    await response(res, true, 200, "Operation success", schedule);
  } catch (err) {
    await response(res, false, 500, err.message);
  }
};

const update = async (req, res) => {
  try {
    const { class_id, name, start, end, place } = req.body;
    const schedule = await model.Schedule.update(
      {
        class_id,
        name,
        start,
        end,
        place
      },
      { where: { id: req.params.id } }
    );
    await response(res, true, 200, "Schedule updated", schedule);
  } catch (err) {
    await response(res, false, 500, err.message);
  }
};

const destroy = async (req, res) => {
  try {
    await model.Schedule.destroy({ where: { id: req.params.id } });
    await response(res, true, 200, "Schedule deleted");
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
