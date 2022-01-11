import { SavedMealProps } from "../../utils/types";
import {
  Data,
  EditButton,
  Flex,
  Grid,
  Label,
  SavedMealContainer,
  Text,
} from "./SavedMeal.style";

function SavedMeal({ data, setEditedForm }: SavedMealProps) {
  return (
    <SavedMealContainer>
      <Data>{data?.name!}</Data>
      <Flex>
        <Text>Рассчитанные данные:</Text>
      </Flex>
      <Data>{data?.calories!} ккал</Data>
      <Grid>
        <Data>
          <Label>белки</Label>
          {data?.protein!} г.
        </Data>
        <Data>
          <Label>жиры</Label>
          {data?.fat!} г.
        </Data>
        <Data>
          <Label>углеводы</Label>
          {data?.carb!} г.
        </Data>
      </Grid>
      <EditButton
        type="button"
        aria-label="Редактировать"
        onClick={() => setEditedForm(true)}
      >
        Редактировать
      </EditButton>
    </SavedMealContainer>
  );
}

export default SavedMeal;
