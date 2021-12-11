import { useSelector } from "react-redux";
import { State } from "../../redux/types";
import { calcYearsEnding } from "../../utils/lingvo";
import {
  optionsActivity,
  optionsPurpose,
  optionsSex,
} from "../../utils/optionsLists";
import { MenuProps } from "../../utils/types";
import {
  Calories,
  EditProfileButton,
  MenuContainer,
  Name,
  Parameter,
  ProfileData,
  Purpose,
} from "./Menu.styles";

function Menu({ onClose }: MenuProps) {
  const data = useSelector((state: State) => state.profile);

  const bmi = Math.round(data.weight / ((data.stature / 100) ^ 2));

  let bmiText = "";

  if (bmi <= 16) {
    bmiText = "выраженный дефицит";
  } else if (bmi > 16 && bmi <= 18.5) {
    bmiText = "дефицит";
  } else if (bmi > 18.5 && bmi <= 25) {
    bmiText = "норма";
  } else if (bmi > 25 && bmi <= 30) {
    bmiText = "избыточная масса";
  } else if (bmi > 30 && bmi <= 35) {
    bmiText = "ожирение 1 степени";
  } else if (bmi > 35 && bmi <= 40) {
    bmiText = "ожирение 2 степени";
  } else if (bmi > 40) {
    bmiText = "ожирение 3 степени";
  }

  return (
    <MenuContainer>
      <ProfileData>
        <Name>{data.name}</Name>
        <Parameter>
          {!data.sex ? "" : optionsSex.find((o) => o.value === data.sex)!.text}
        </Parameter>
        <Parameter>
          {data.age} {calcYearsEnding(data.age)}, {data.stature} см,{" "}
          {data.weight} кг
        </Parameter>
        <Parameter>
          {!data.activityLevel
            ? ""
            : optionsActivity.find((o) => o.value === data.activityLevel)!
                .span}{" "}
          уровень активности
        </Parameter>

        <Parameter>
          ИМТ {bmi} ({bmiText})
        </Parameter>

        <Purpose>
          <Parameter>
            Цель:{" "}
            {!data.purpose
              ? ""
              : optionsPurpose.find((o) => o.value === data.purpose)!.text}
          </Parameter>
        </Purpose>
      </ProfileData>
      <Calories>{data.purposeMetabolism} ккал</Calories>
      <EditProfileButton to="/profile" onClick={onClose}>
        Редактировать личные данные
      </EditProfileButton>
    </MenuContainer>
  );
}

export default Menu;
