import bcrypt from "bcryptjs";
import { Model } from "objection";
import { incorrectData } from "../constants";
import Unauthorized from "../errors/UnauthorizedErr";

export class User extends Model {
  static tableName = "user";

  id!: number;
  name!: string;
  email!: string;
  password!: string;
  age!: number;
  stature!: number;
  weight!: number;
  sex!: number;
  activityLevel!: number;
  target!: number;

  static async findUserByCredentials(email: string, password: string) {
    const user = await this.query().findOne("email", email);

    if (!user) {
      throw new Unauthorized(incorrectData);
    }

    const matched = await bcrypt.compare(password, user.password);

    if (!matched) {
      throw new Unauthorized(incorrectData);
    }

    return user;
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "email", "password"],

      properties: {
        id: { type: "integer" },
        name: { type: "string" },
        email: { type: "string" },
        password: { type: "string" },
        age: { type: "number" },
        stature: { type: "number" },
        weight: { type: "number" },
        sex: {
          type: "number",
          enum: [7, 12],
        },
        activityLevel: {
          type: "number",
          enum: [1, 1.2, 1.375, 1.4625, 1.55, 1.6375, 1.725, 1.9],
        },
        target: {
          type: "number",
          enum: [0.8, 0.9, 1, 1.1, 1.2],
        },
      },
    };
  }
}
