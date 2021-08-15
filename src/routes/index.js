const userRouter = require("./user-routes");
const movieRouter = require("./movie-routes");
const personRouter = require("./person-routes");
const { accountRouter } = require("./account-routes");

module.exports = {
  userRouter: userRouter,
  movieRouter: movieRouter,
  personRouter: personRouter,
  accountRouter: accountRouter,
};
