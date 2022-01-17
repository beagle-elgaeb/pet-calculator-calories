import expressWinston from "express-winston";
import winston from "winston";

export const requestLogger = expressWinston.logger({
  transports: [new winston.transports.File({ filename: "request.log" })],
  format: winston.format.json(),
});

export const errorLogger = expressWinston.errorLogger({
  transports: [new winston.transports.File({ filename: "error.log" })],
  format: winston.format.json(),
});
