import { useSelector } from "react-redux";
import { State } from "../../redux/types";
import { calcYearsEnding } from "../../utils/lingvo";
import {
  optionsActivity,
  optionsTarget,
  optionsSex,
} from "../../utils/optionsLists";
import { MenuProps } from "../../utils/types";
import {
  Buttons,
  Calories,
  EditProfileButton,
  MenuContainer,
  Name,
  Navigation,
  NavigationButton,
  Parameter,
  ProfileData,
  Target,
} from "./Menu.styles";

function Menu({ onClose }: MenuProps) {
  const data = useSelector((state: State) => state.profile);

  const age = typeof data.age === "string" ? 0 : data.age;
  const stature = typeof data.stature === "string" ? 0 : data.stature;
  const weight = typeof data.weight === "string" ? 0 : data.weight;

  const bmi = Math.round(weight / ((stature / 100) ^ 2));

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

        {Number.isFinite(data.age) ? (
          <>
            <Parameter>
              {!data.sex
                ? ""
                : optionsSex.find((o) => o.value === data.sex)!.text}
            </Parameter>
            <Parameter>
              {age} {calcYearsEnding(age)}, {stature} см, {weight} кг
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
          </>
        ) : (
          <></>
        )}

        <Target>
          <Parameter>
            Цель:{" "}
            {!data.target
              ? ""
              : optionsTarget.find((o) => o.value === data.target)!.text}
          </Parameter>
        </Target>
      </ProfileData>
      <Calories>{data.targetMetabolism} ккал</Calories>
      <Buttons>
        <Navigation>
          <NavigationButton
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
            onClick={onClose}
          >
            Калькулятор
          </NavigationButton>
          <NavigationButton
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/profile"
            onClick={onClose}
          >
            Профиль
          </NavigationButton>
          <NavigationButton
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about-project"
            onClick={onClose}
          >
            О проекте
          </NavigationButton>
        </Navigation>
        <EditProfileButton to="/profile" onClick={onClose}>
          Редактировать личные данные
        </EditProfileButton>
      </Buttons>
    </MenuContainer>
  );
}

export default Menu;
