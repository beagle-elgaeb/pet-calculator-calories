export function calcCaloriesEnding(number: number) {
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

export function calcYearsEnding(number: number) {
  const str = String(number);
  const penultimateNumber = Number(str[Number(str.length) - 2]);
  const lastNumber = Number(str[Number(str.length) - 1]);

  if (lastNumber === 1) {
    if (!!penultimateNumber && penultimateNumber === 1) {
      return "лет";
    } else {
      return "год";
    }
  } else if (lastNumber === 2 || lastNumber === 3 || lastNumber === 4) {
    if (!!penultimateNumber && penultimateNumber === 1) {
      return "лет";
    } else {
      return "года";
    }
  } else {
    return "лет";
  }
}
