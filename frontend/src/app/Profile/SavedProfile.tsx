import { useSelector } from "react-redux";
import { State } from "../../redux/types";
import { calcBMI, calcNutrients } from "../../utils/math";
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
  const data = useSelector((state: State) => state.profile);

  const { bmi, bmiText } = calcBMI(data.name, data.weight, data.stature);

  const { targetProtein, targetFat, targetCarb } = calcNutrients(
    data.targetMetabolism
  );

  return (
    <SavedProfileContainer>
      {!!data.name ? (
        <>
          <Flex>
            <Text>Ваши данные:</Text>
          </Flex>
          <Data>
            <Label>Имя</Label>
            {data.name}
          </Data>
          <Grid>
            <Data>
              <Label>Возраст</Label>
              {data.age}
            </Data>
            <Data>
              <Label>Рост, см</Label>
              {data.stature}
            </Data>
            <Data>
              <Label>Вес, кг</Label>
              {data.weight}
            </Data>
          </Grid>
          <Data>
            <Label>Пол</Label>
            {optionsSex.find((o) => o.value === data.sex)!.text}
          </Data>
          <Data>
            <Label>Уровень активности</Label>
            {optionsActivity.find((o) => o.value === data.activityLevel)!.span}
          </Data>
          <Data>
            <Label>Индекс массы тела</Label>
            {bmi} ({bmiText})
          </Data>
          <Flex>
            <Text>Ваша цель:</Text>
          </Flex>
          <Data>
            {optionsTarget.find((o) => o.value === data.target)!.text}
          </Data>
          <Data>
            <Label>Ккал</Label>
            {data.targetMetabolism}
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
