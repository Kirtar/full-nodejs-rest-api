const Router = require("express").Router;
const { userController } = require("../controllers");
const { authMiddleware } = require("../middlewares");

const userRouter = Router();

userRouter.get("/", authMiddleware, userController.getAllUsers);
userRouter.get("/:id", authMiddleware, userController.getUser);
userRouter.post("/", authMiddleware, userController.addUser);
userRouter.patch("/:id", authMiddleware, userController.updateUser);
userRouter.delete("/:id", authMiddleware, userController.deleteUser);

module.exports = userRouter;
