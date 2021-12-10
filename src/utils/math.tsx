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

export function calcWordEnding(number: number) {
  const str = String(number);
  const penultimateNumber = Number(str[Number(str.length) - 2]);
  const lastNumber = Number(str[Number(str.length) - 1]);

  if (lastNumber === 1) {
    if (!!penultimateNumber && penultimateNumber === 1) {
      return "килокалорий";
    } else {
      return "килокалорию";
    }
  } else if (lastNumber === 2 || lastNumber === 3 || lastNumber === 4) {
    if (!!penultimateNumber && penultimateNumber === 1) {
      return "килокалорий";
    } else {
      return "килокалории";
    }
  } else {
    return "килокалорий";
  }
}
