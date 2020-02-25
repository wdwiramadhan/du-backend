const model = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const response = require("../helpers/response");

require("dotenv").config();

const register = async (req, res) => {
  try {
    const findUser = await model.User.findOne({
      where: {
        email: req.body.email
      }
    });
    if (findUser) {
      await response(res, false, 422, "User has been exist");
    }
    const { name, email, password } = req.body;
    const created = await model.User.create({
      name,
      email,
      password: bcrypt.hashSync(password, 8)
    });
    if (created) {
      await response(res, true, 201, "User successfully created", created);
    }
  } catch (err) {
    await response(res, false, 500, err.message);
  }
};

const login = async (req, res) => {
  try {
    const user = await model.User.findOne({
      where: {
        email: req.body.email
      }
    });
    if (!user) {
      await response(res, false, 404, "User not found");
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      await response(res, false, 401, "wrong password");
    }
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: 86400 }
    );
    await response(res, true, 200, "login successfully", {
      token: token,
      user: user
    });
  } catch (err) {
    await response(res, false, 500, err.message);
  }
};

const me = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const result = await model.User.findOne({
      where: {
        id: decode.id
      }
    });
    if (!result) {
      await response(res, false, 404, "User not found");
    }
    await response(res, true, 200, "success", result);
  } catch (err) {
    await response(res, false, 500, err.message);
  }
};

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return response(res, false, 401, "token not existed");
  }
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, err => {
    if (err) {
      return response(res, false, 400, "Token Unrecognized");
    }
    next();
  });
};

module.exports = {
  register,
  login,
  me,
  authenticate
};
