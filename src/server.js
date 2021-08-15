const express = require("express");
const helmet = require("helmet");
const {
  userRouter,
  movieRouter,
  personRouter,
  accountRouter,
} = require("./routes");

const app = express();

app.use(helmet());
app.use(express.json());
app.use("/account", accountRouter);
app.use("/user", userRouter);
app.use("/movie", movieRouter);
app.use("/person", personRouter);

app.get("/", (req, res) => {
  res.status(200).send({
    data: "Successfully connected to entry point",
  });
});

module.exports = app;
