const Router = require("express").Router;

const { authMiddleware } = require("../middlewares");
const { authController, userController } = require("../controllers");

const accountRouter = Router();

accountRouter.post("/authenticate", authController.authenticate);
accountRouter.post("/register", userController.addUser);
accountRouter.post("/refresh-token", authController.updateAccessToken);
accountRouter.post("/reject-token", authController.rejectToken);
accountRouter.post("/sign-out", authMiddleware, authController.rejectToken);

module.exports = {
  accountRouter: accountRouter,
};
