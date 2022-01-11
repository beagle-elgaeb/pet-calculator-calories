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

const names = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

function getMonth(date: Date) {
  return names[date.getMonth()];
}

export function formatDate(timestamp: number) {
  const date = new Date(timestamp);
  return `${date.getDate().toString()} ${getMonth(date)}`;
}

export function setStartDay(timestamp: number) {
  const date = new Date(timestamp);
  return date.setHours(0, 0, 0, 0);
}
