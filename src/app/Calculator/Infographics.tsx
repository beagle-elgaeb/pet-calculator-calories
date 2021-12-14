import { useSelector } from "react-redux";
import { State } from "../../redux/types";
import { formatDate } from "../../utils/lingvo";
import { InfographicsProps } from "../../utils/types";
import {
  InfographicsContainer,
  Label,
  Procent,
  RealCalories,
  RealCaloriesGradient,
  RealTime,
  TargetCalories,
} from "./Infographics.styles";

function Infographics({ summCalories, date }: InfographicsProps) {
  const personData = useSelector((state: State) => state.profile);
  // const history = useSelector((state: State) => state.history);
  // const historyData = history.find((item) => item.targetMetabolism);

  const now = new Date();
  const nowDateStr = formatDate(Date.now());

  const timeDayRatio = (now.getHours() * 60 + now.getMinutes()) / (24 * 60);
  const calRatio = (targetMetabolism: number) =>
    summCalories / targetMetabolism;

  if (!Number.isFinite(calRatio(personData.targetMetabolism))) {
    return null;
  }

  return (
    <InfographicsContainer>
      <TargetCalories>
        {nowDateStr === date ? (
          <>
            <RealTime timeDayRatio={timeDayRatio}></RealTime>
            <RealCalories calRatio={calRatio(personData.targetMetabolism)}>
              <RealCaloriesGradient
                calRatio={calRatio(personData.targetMetabolism)}
              ></RealCaloriesGradient>
            </RealCalories>
            <Procent calRatio={calRatio(personData.targetMetabolism)}>
              {Math.round(calRatio(personData.targetMetabolism) * 100)}%
            </Procent>
          </>
        ) : (
          <>
            <RealCalories calRatio={calRatio(personData.targetMetabolism)}>
              <RealCaloriesGradient
                calRatio={calRatio(personData.targetMetabolism)}
              ></RealCaloriesGradient>
            </RealCalories>
            <Procent calRatio={calRatio(personData.targetMetabolism)}>
              {Math.round(calRatio(personData.targetMetabolism) * 100)}%
            </Procent>
          </>
        )}
      </TargetCalories>
      <Label>Калории</Label>
    </InfographicsContainer>
  );
}

export default Infographics;
