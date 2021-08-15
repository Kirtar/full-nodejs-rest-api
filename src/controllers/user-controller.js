const db = require("../models");
const { encryptString } = require("../utils/encrypt");

async function getAllUsers(req, res, next) {
  try {
    const users = await db.User.find();

    if (users.error) {
      res.status(400).send({ error: users.error });
    }
    return res.status(200).send({
      message: "GET ALL users success",
      users: users,
    });
  } catch (error) {
    next(error);
  }
}

async function getUser(req, res, next) {
  try {
    const user = await db.User.findById(req.params.id);

    if (user.error) {
      res.status(400).send({ error: user.error });
    }
    return res.status(200).send({
      message: `GET specific user(${req.params.id}) received!`,
      user: user,
    });
  } catch (error) {
    next(error);
  }
}

async function addUser(req, res, next) {
  try {
    const {
      nickName = "",
      firstName = "",
      lastName = "",
      email,
      password,
      active = true,
    } = req.body;

    const encryptedPass = await encryptString(password);

    const userCreation = await db.User.create({
      nickName: nickName,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: encryptedPass,
      active: active,
    });

    if (userCreation.error) {
      res.status(400).send({ error: userCreation.error });
    }
    return res.status(201).send({
      message: "POST user received!",
      user: userCreation._id,
    });
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  try {
    const userUpdate = await db.User.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
    );

    if (userUpdate.error) {
      res.status(400).send({
        message: userUpdate.error,
      });
    }

    res.status(200).send({
      message: `UPDATE specific user(${req.params.id}) received!`,
      data: userUpdate,
    });
  } catch (err) {
    next(err);
  }
}

async function deleteUser(req, res, next) {
  try {
    const userUpdate = await db.User.findOneAndDelete({
      _id: req.params.id,
    });

    if (userUpdate.error) {
      res.status(400).send({
        message: userUpdate.error,
      });
    }

    res.status(200).send({
      message: `DELETE specific user(${req.params.id}) received!`,
      data: userUpdate,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllUsers: getAllUsers,
  getUser: getUser,
  addUser: addUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
};
