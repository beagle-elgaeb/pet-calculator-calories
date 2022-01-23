import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { calcBMI, calcMetabolism, calcNutrients } from "../../utils/math";
import {
  optionsActivity,
  optionsSex,
  optionsTarget,
} from "../../utils/optionsLists";
import { SavedProfileProps } from "../../utils/types";
import {
  Data,
  EditButton,
  Flex,
  Grid,
  Label,
  SavedProfileContainer,
  Text,
} from "./SavedProfile.styles";

function SavedProfile({ setEditedForm }: SavedProfileProps) {
  const data = useContext(CurrentUserContext)!;

  const { name, age, stature, weight, sex, activityLevel, target } = data;

  const { bmi, bmiText } = calcBMI(weight, stature);

  const { targetProtein, targetFat, targetCarb } = calcNutrients(
    calcMetabolism({ age, stature, weight, sex, activityLevel, target })
      .targetMetabolism
  );

  return (
    <SavedProfileContainer>
      {!!age ? (
        <>
          <Flex>
            <Text>Ваши данные:</Text>
          </Flex>
          <Data>
            <Label>Имя</Label>
            {name}
          </Data>
          <Grid>
            <Data>
              <Label>Возраст</Label>
              {age}
            </Data>
            <Data>
              <Label>Рост, см</Label>
              {stature}
            </Data>
            <Data>
              <Label>Вес, кг</Label>
              {weight}
            </Data>
          </Grid>
          <Data>
            <Label>Пол</Label>
            {optionsSex.find((o) => o.value === sex)!.text}
          </Data>
          <Data>
            <Label>Уровень активности</Label>
            {optionsActivity.find((o) => o.value === activityLevel)!.span}
          </Data>
          <Data>
            <Label>Индекс массы тела</Label>
            {bmi} ({bmiText})
          </Data>
          <Flex>
            <Text>Ваша цель:</Text>
          </Flex>
          <Data>{optionsTarget.find((o) => o.value === target)!.text}</Data>
          <Data>
            <Label>Ккал</Label>
            {
              calcMetabolism({
                age,
                stature,
                weight,
                sex,
                activityLevel,
                target,
              }).targetMetabolism
            }
          </Data>
          <Grid>
            <Data>
              <Label>Белки, г</Label>
              {Math.round(targetProtein)}
            </Data>
            <Data>
              <Label>Жиры, г</Label>
              {Math.round(targetFat)}
            </Data>
            <Data>
              <Label>Углеводы, г</Label>
              {Math.round(targetCarb)}
            </Data>
          </Grid>
        </>
      ) : (
        <p>Вам необходимо заполнить профиль</p>
      )}
      <EditButton
        type="button"
        aria-label="Редактировать"
        onClick={() => setEditedForm(true)}
      >
        Редактировать
      </EditButton>
    </SavedProfileContainer>
  );
}

export default SavedProfile;
