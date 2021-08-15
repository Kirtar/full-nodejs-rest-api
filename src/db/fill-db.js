const db = require("../models");
const { encryptString } = require("../utils/encrypt");
const {
  fillDbPersonsData,
  fillDbMoviesData,
  fillDbUsersData,
} = require("./fill-db-data");

async function fillDbPersons() {
  await db.Person.deleteMany({});
  await db.Person.create(fillDbPersonsData());
}

async function fillDbMovies() {
  const movies = fillDbMoviesData().map((movie) => {
    if (movie.cast) {
      movie.cast = movie.cast.reduce((acc, personName) => {
        db.Person.findOne({ name: personName }, (err, person) => {
          if (person) {
            acc.push(person._id);
          }
        });
        return acc;
      }, []);
    }
    if (movie.crew) {
      movie.crew = movie.crew.reduce((acc, person) => {
        db.Person.findOne({ name: person.personName }, (err, foundPerson) => {
          if (foundPerson) {
            acc.push({
              personId: foundPerson._id,
              role: person.role,
            });
          }
        });
        return acc;
      }, []);
    }
    return movie;
  });

  await db.Movie.deleteMany({});
  await db.Movie.create(movies);
}

async function fillDbUsers() {
  const users = await Promise.all(
    fillDbUsersData().map(async (user) => {
      if (user.password) {
        user.password = await encryptString(user.password);
      }
      return user;
    }),
  );

  await db.User.deleteMany({});
  await db.User.create(users);
}
module.exports = {
  fillDbMovies: fillDbMovies,
  fillDbPersons: fillDbPersons,
  fillDbUsers: fillDbUsers,
};
