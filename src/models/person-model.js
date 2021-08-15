const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const PersonSchema = Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    birthDate: {
      type: Number,
      trim: true,
    },
    birthPlace: {
      type: String,
      trim: true,
    },
  },

  {
    timestamps: true,
  },
);

const PersonModel = mongoose.model("person", PersonSchema);

module.exports = {
  personModel: PersonModel,
  PersonSchema: PersonSchema,
};
