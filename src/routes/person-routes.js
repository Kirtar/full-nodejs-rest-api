const Router = require("express").Router;
const { personController } = require("../controllers");
const { authMiddleware } = require("../middlewares");

const personRouter = Router();

personRouter.get("/", authMiddleware, personController.getAllPersons);
personRouter.get("/:id", authMiddleware, personController.getPerson);
personRouter.post("/", authMiddleware, personController.addPerson);
personRouter.patch("/:id", authMiddleware, personController.updatePerson);
personRouter.delete("/:id", authMiddleware, personController.deletePerson);

module.exports = personRouter;
