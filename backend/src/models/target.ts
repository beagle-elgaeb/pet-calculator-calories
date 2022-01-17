import { Model } from "objection";

export class Target extends Model {
  static tableName = "metabolismTarget";

  static get jsonSchema() {
    return {
      type: "object",
      required: ["ownerId", "targetMetabolism"],

      properties: {
        id: { type: "integer" },
        ownerId: { type: "integer" },
        date: { type: "string" },
        targetMetabolism: { type: "number" },
      },
    };
  }
}
