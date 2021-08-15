const dotenv = require("dotenv");

dotenv.config();

const {
  NODE_ENV = "development",
  MONGO_DB_URL_PRODUCTION,
  MONGO_DB_URL_DEVELOPMENT,
  MONGO_DB_URL_TEST,
  ACCESS_TOKEN_SECRET,
  PORT,
  ENCRYPTION_SALT_DEVELOPMENT,
  ENCRYPTION_SALT_PRODUCTION,
  ENCRYPTION_SALT_TEST,
} = process.env;

const CONFIG = {
  production: {
    app: { port: PORT },
    db: { url: MONGO_DB_URL_PRODUCTION },
    encrypt: { salt: ENCRYPTION_SALT_PRODUCTION },
    auth: {
      token: ACCESS_TOKEN_SECRET,
    },
  },
  development: {
    app: { port: PORT },
    db: { url: MONGO_DB_URL_DEVELOPMENT },
    encrypt: { salt: ENCRYPTION_SALT_DEVELOPMENT },
    auth: {
      token: ACCESS_TOKEN_SECRET,
    },
  },
  test: {
    app: { port: PORT },
    db: { url: MONGO_DB_URL_TEST },
    encrypt: { salt: ENCRYPTION_SALT_TEST },
    auth: {
      token: ACCESS_TOKEN_SECRET,
    },
  },
};

module.exports = { config: CONFIG[NODE_ENV] };
