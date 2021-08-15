const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const { PersonSchema } = require("./person-model");

const MovieSchema = Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    releaseYear: Number,
    genres: {
      type: [String],
      trim: true,
    },
    duration: {
      type: Number,
      trim: true,
    },
    cast: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "person",
      },
    ],
    crew: [
      {
        personId: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: "person",
        },
        role: String,
      },
    ],
  },

  {
    timestamps: true,
  },
);

const Movie = mongoose.model("movie", MovieSchema);

module.exports = Movie;
