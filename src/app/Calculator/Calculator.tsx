import Days from "./Days";
import Form from "./Form";
import { CalculatorContainer } from "./Calculator.styles";

function Calculator() {
  return (
    <CalculatorContainer>
      <Form />
      <Days />
    </CalculatorContainer>
  );
}

export default Calculator;
