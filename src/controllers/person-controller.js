const db = require("../models");

async function getAllPersons(req, res, next) {
  try {
    const persons = await db.Person.find();

    if (persons.error) {
      res.status(400).send({ error: persons.error });
    }
    return res.status(200).send({
      message: "GET ALL persons success",
      persons: persons,
    });
  } catch (error) {
    next(error);
  }
}

async function getPerson(req, res, next) {
  try {
    const person = await db.Person.findById(req.params.id);

    if (Person.error) {
      res.status(400).send({ error: Person.error });
    }
    return res.status(200).send({
      message: `GET specific person(${req.params.id}) received!`,
      person: person,
    });
  } catch (error) {
    next(error);
  }
}

async function addPerson(req, res, next) {
  try {
    const { name = "", birthDate = 0, birthPlace = "" } = req.body;

    const personCreation = await db.Person.create({
      name,
      birthDate,
      birthPlace,
    });

    if (personCreation.error) {
      res.status(400).send({ error: personCreation.error });
    }
    return res.status(201).send({
      message: "POST person received!",
      person: personCreation._id,
    });
  } catch (error) {
    next(error);
  }
}

async function updatePerson(req, res, next) {
  try {
    const personUpdate = await db.Person.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
    );

    if (personUpdate.error) {
      res.status(400).send({
        message: personUpdate.error,
      });
    }

    res.status(200).send({
      message: `UPDATE specific person(${req.params.id}) received!`,
      data: personUpdate,
    });
  } catch (err) {
    next(err);
  }
}

async function deletePerson(req, res, next) {
  try {
    const personUpdate = await db.Person.findOneAndDelete({
      _id: req.params.id,
    });

    if (personUpdate.error) {
      res.status(400).send({
        message: personUpdate.error,
      });
    }

    res.status(200).send({
      message: `DELETE specific person(${req.params.id}) received!`,
      data: personUpdate,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllPersons: getAllPersons,
  getPerson: getPerson,
  addPerson: addPerson,
  updatePerson: updatePerson,
  deletePerson: deletePerson,
};
