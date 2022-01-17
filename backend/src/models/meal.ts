import { Model } from "objection";

export class Meal extends Model {
  static tableName = "mealItem";

  ownerId!: number;

  static get jsonSchema() {
    return {
      type: "object",
      required: ["ownerId", "name", "protein", "fat", "carb", "weight"],

      properties: {
        id: { type: "integer" },
        ownerId: { type: "integer" },
        date: { type: "string" },
        name: { type: "string", minLength: 4, maxLength: 100 },
        protein: { type: "number" },
        fat: { type: "number" },
        carb: { type: "number" },
        weight: { type: "number" },
      },
    };
  }
}
