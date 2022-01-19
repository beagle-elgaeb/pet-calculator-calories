import dotenv from "dotenv";
import { knexSnakeCaseMappers } from "objection";

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, JWT_SECRET } = process.env;

export const databaseConfig = {
  client: "pg",
  connection: {
    host: DB_HOST ?? "localhost",
    port: 5432,
    user: DB_USER ?? "beagle",
    password: DB_PASSWORD ?? "1203",
    database: DB_NAME ?? "calccal",
  },
  ...knexSnakeCaseMappers(),
};

export const jwtSecret =
  JWT_SECRET ??
  "11299a2a450f813e52305dd4305e58147007c94725cc3a1c55b154bd318afb70";
