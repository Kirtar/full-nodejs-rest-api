const app = require("./server");
const { config } = require("./config");
const connect = require("./db/connect");

// uncomment if you need to seed the database before
// const { fillDbPersons, fillDbMovies, fillDbUsers } = require("./db/fill-db");

connect().then(async () => {
  // uncomment if you need to seed the database before
  // await fillDbPersons();
  // await fillDbMovies();
  // await fillDbUsers();

  app.listen(config.app.port, () => {
    console.log(`Server running at port ${config.app.port}`);
  });
});
