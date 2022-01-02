import { useState } from "react";
import { useEventListener } from "../../utils/eventListener";
import { MealPopupProps } from "../../utils/types";
import Form from "./Form";
import { Close, MealPopupContainer, MealPopupOverlay } from "./MealPopup.style";
import SavedMeal from "./SavedMeal";

function MealPopup({ data, isOpen, onClose, onKeydown }: MealPopupProps) {
  const [editedForm, setEditedForm] = useState(false);

  useEventListener(isOpen, onKeydown, "keydown");

  return (
    <MealPopupOverlay opened={isOpen} onClick={onClose}>
      <MealPopupContainer opened={isOpen} onClick={(e) => e.stopPropagation()}>
        <Close
          onClick={() => {
            onClose();
            setEditedForm(false);
          }}
        ></Close>
        {editedForm ? (
          <Form data={data} setEditedForm={setEditedForm} onClose={onClose} />
        ) : (
          <SavedMeal data={data} setEditedForm={setEditedForm} />
        )}
      </MealPopupContainer>
    </MealPopupOverlay>
  );
}

export default MealPopup;
