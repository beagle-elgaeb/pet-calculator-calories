import cors from "cors";

const { NODE_ENV } = process.env;

export default cors(
  NODE_ENV === "production"
    ? {
        origin: ["https://eugenes.romey.ru", "http://eugenes.romey.ru"],
        credentials: true,
      }
    : {
        origin: ["http://localhost:3001"],
        credentials: true,
      }
);
