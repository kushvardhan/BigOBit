const winston = require("winston");
const { LOGGER_MONGO_URI } = require("./server.config");
require("winston-mongodb");

/**
 * Colors ONLY for console
 */
winston.addColors({
  error: "red",
  warn: "yellow",
  info: "cyan",
  http: "magenta",
  debug: "gray",
});

/**
 * Common timestamp format (human readable)
 */
const timeFormat = "YYYY-MM-DD HH:mm:ss";

/**
 * Console format (colored + readable)
 */
const consoleFormat = winston.format.combine(
  winston.format.colorize({ all: true }),
  winston.format.timestamp({ format: timeFormat }),
  winston.format.printf(
    (info) => `${info.timestamp} [${info.level}]: ${info.message}`
  )
);

/**
 * Mongo & File format (NO colors, readable)
 */
const persistentFormat = winston.format.combine(
  winston.format.timestamp({ format: timeFormat }),
  winston.format.printf(
    (info) => `${info.timestamp} [${info.level}]: ${info.message}`
  )
);

/**
 * Logger instance
 */
const logger = winston.createLogger({
  level: "info",
  transports: [
    // Console (developer friendly)
    new winston.transports.Console({
      format: consoleFormat,
    }),

    // MongoDB (human readable)
    new winston.transports.MongoDB({
      level: "error",
      db: LOGGER_MONGO_URI,
      collection: "logs",
      format: persistentFormat,
    }),

    // File (human readable)
    new winston.transports.File({
      filename: "app.log",
      level: "error",
      format: persistentFormat,
    }),
  ],
});

module.exports = logger;
