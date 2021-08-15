const Router = require("express").Router;
const { movieController } = require("../controllers");
const { authMiddleware } = require("../middlewares");

const movieRouter = Router();

movieRouter.get("/", authMiddleware, movieController.getAllMovies);
movieRouter.get("/:id", authMiddleware, movieController.getMovie);
movieRouter.post("/", authMiddleware, movieController.addMovie);
movieRouter.patch("/:id", authMiddleware, movieController.updateMovie);
movieRouter.delete("/:id", authMiddleware, movieController.deleteMovie);

module.exports = movieRouter;
