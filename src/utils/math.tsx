export function calcСalories(values: {
  protein: number | null;
  fat: number | null;
  carb: number | null;
  weight: number | null;
}): number {
  let result = 0;

  const isNull = Object.values(values).includes(null);

  if (isNull) {
    return result;
  }

  const weight = values.weight! / 100;
  const ccalIn100Gr = values.protein! * 4 + values.fat! * 9 + values.carb! * 4;

  result = Math.round(ccalIn100Gr * weight);

  return result;
}
