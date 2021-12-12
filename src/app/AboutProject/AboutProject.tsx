import {
  AboutProjectContainer,
  Subtitlele,
  Text,
  Title,
} from "./AboutProject.styles";

function AboutProject() {
  return (
    <AboutProjectContainer>
      <Title>О проекте</Title>
      <Subtitlele>
        Калькулятор пищевой ценности потреблённых продуктов:
      </Subtitlele>
      <Text>✴ Изначально принимает традиционные данные о БЖУ - на 100г.</Text>
      <Text>✴ Можно менять вес, для которого вносятся БЖУ.</Text>
      <Text>✴ Внесённые данные сохраняются в localStorage.</Text>
      <Text>
        ✴ Сохранённые в localStorage данные группируются и отображаются в
        карточках по дням.
      </Text>
      <Text>✴ Каждом дне рассчитывается суммарная пищевая ценность.</Text>
      <Text>✴ При необходимости можно удалить запись.</Text>
      <Subtitlele> Форма редактирования профиля: </Subtitlele>
      <Text>
        ✴ Принимает биологические параметры пользователя, данные о его уровне
        активности и целях контроля потребления.
      </Text>
      <Text>
        ✴ Исходя из принятых данных рассчитывает рекомендуемые нормы
        потребления.
      </Text>
    </AboutProjectContainer>
  );
}

export default AboutProject;
