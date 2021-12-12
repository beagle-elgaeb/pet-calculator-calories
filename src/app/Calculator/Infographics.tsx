import { useSelector } from "react-redux";
import { State } from "../../redux/types";

import {
  InfographicsContainer,
  Label,
  RealCalories,
  RealCaloriesGradient,
  RealTime,
  TargetCalories,
  Procent,
} from "./Infographics.styles";

function Infographics({ summCalories }: { summCalories: number }) {
  const personData = useSelector((state: State) => state.profile);

  const now = new Date();
  const timeDayRatio = (now.getHours() * 60 + now.getMinutes()) / (24 * 60);
  const calRatio = summCalories / personData.targetMetabolism;

  if (!Number.isFinite(calRatio)) {
    return null;
  }

  return (
    <InfographicsContainer>
      <TargetCalories>
        <RealTime timeDayRatio={timeDayRatio}></RealTime>
        <RealCalories calRatio={calRatio}>
          <RealCaloriesGradient calRatio={calRatio}></RealCaloriesGradient>
        </RealCalories>
        <Procent calRatio={calRatio}>{Math.round(calRatio * 100)}%</Procent>
      </TargetCalories>
      <Label>Калории</Label>
    </InfographicsContainer>
  );
}

export default Infographics;
