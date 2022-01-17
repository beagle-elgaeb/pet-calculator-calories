export function calctargetMetabolism({
  age,
  stature,
  weight,
  sex,
  activityLevel,
  target,
}: {
  age: number;
  stature: number;
  weight: number;
  sex: number;
  activityLevel: number;
  target: number;
}) {
  let baseMetabolism = 0;
  let targetMetabolism = 0;

  if (sex === 12) {
    baseMetabolism = Math.round(
      447.593 +
        Number(weight) * 9.247 +
        Number(stature) * 3.098 -
        Number(age) * 4.33
    );

    targetMetabolism =
      Math.round(baseMetabolism * activityLevel * target) > 1200
        ? Math.round(baseMetabolism * activityLevel * target)
        : 1200;
  } else if (sex === 7) {
    baseMetabolism = Math.round(
      88.362 +
        Number(weight) * 13.397 +
        Number(stature) * 4.799 -
        Number(age) * 5.667
    );

    targetMetabolism =
      Math.round(baseMetabolism * activityLevel * target) > 1800
        ? Math.round(baseMetabolism * activityLevel * target)
        : 1800;
  }

  return targetMetabolism;
}
