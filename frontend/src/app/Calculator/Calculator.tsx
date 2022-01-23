import { useState } from "react";
import { CalculatorProps } from "../../utils/types";
import Days from "../Days/Days";
import {
  CalculatorContainer,
  OpenFormButton,
  OpenFormButtonIcon,
} from "./Calculator.styles";
import Form from "./Form";

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
