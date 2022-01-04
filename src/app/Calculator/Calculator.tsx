import Days from "./Days";
import Form from "./Form";
import { CalculatorContainer, OpenFormButton, OpenFormButtonIcon } from "./Calculator.styles";
import { CalculatorProps } from "../../utils/types";
import { useState } from "react";

function Calculator({ handleMealClick }: CalculatorProps) {
  const [calculatorVisible, setCalculatorVisible] = useState(true);

  return (
    <CalculatorContainer>
      <OpenFormButton
        type="button"
        onClick={() => setCalculatorVisible(!calculatorVisible)}
      >
        <OpenFormButtonIcon visible={calculatorVisible}></OpenFormButtonIcon>
        {calculatorVisible ? "Скрыть калькулятор" : "Показать калькулятор"}
      </OpenFormButton>
      <Form visible={calculatorVisible} />
      <Days handleMealClick={handleMealClick} />
    </CalculatorContainer>
  );
}

export default Calculator;