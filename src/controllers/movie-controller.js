const db = require("../models");
async function getAllMovies(req, res, next) {
  try {
    const movies = await db.Movie.find();

    if (movies.error) {
      res.status(400).send({ error: movies.error });
    }
    return res.status(200).send({
      message: "GET ALL movies success",
      movies: movies,
    });
  } catch (error) {
    next(error);
  }
}

async function getMovie(req, res, next) {
  try {
    const movie = await db.Movie.findById(req.params.id);

    if (movie.error) {
      res.status(400).send({ error: movie.error });
    }
    return res.status(200).send({
      message: `GET specific movie(${req.params.id}) received!`,
      movie: movie,
    });
  } catch (error) {
    next(error);
  }
}

async function addMovie(req, res, next) {
  try {
    const {
      title,
      releaseYear = 0,
      genres = [],
      duration = 0,
      cast = [],
      crew = [],
    } = req.body;

    const movieCreation = await db.Movie.create({
      title,
      releaseYear,
      genres,
      duration,
      cast,
      crew,
    });

    if (movieCreation.error) {
      res.status(400).send({ error: movieCreation.error });
    }
    return res.status(201).send({
      message: "POST movie received!",
      movie: movieCreation._id,
    });
  } catch (error) {
    next(error);
  }
}

async function updateMovie(req, res, next) {
  try {
    const movieUpdate = await db.Movie.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
    );

    if (movieUpdate.error) {
      res.status(400).send({
        message: movieUpdate.error,
      });
    }

    res.status(200).send({
      message: `UPDATE specific movie(${req.params.id}) received!`,
      data: movieUpdate,
    });
  } catch (err) {
    next(err);
  }
}

async function deleteMovie(req, res, next) {
  try {
    const movieUpdate = await db.Movie.findOneAndDelete({ _id: req.params.id });

    if (movieUpdate.error) {
      res.status(400).send({
        message: movieUpdate.error,
      });
    }

    res.status(200).send({
      message: `DELETE specific movie(${req.params.id}) received!`,
      data: movieUpdate,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllMovies: getAllMovies,
  getMovie: getMovie,
  addMovie: addMovie,
  updateMovie: updateMovie,
  deleteMovie: deleteMovie,
};
