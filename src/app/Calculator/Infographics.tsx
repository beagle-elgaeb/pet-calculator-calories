import { useSelector } from "react-redux";
import { State } from "../../redux/types";
import { formatDate, setStartDay } from "../../utils/lingvo";
import { calcNutrients } from "../../utils/math";
import { InfographicsProps } from "../../utils/types";
import {
  Calories,
  InfographicsContainer,
  Label,
  LinkToProfile,
  Nutrients,
  Procent,
  RealData,
  RealDataN,
  RealGradient,
  RealGradientN,
  RealTime,
  RealTimeN,
  Target,
  TargetN,
} from "./Infographics.styles";

function Infographics({
  summCalories,
  summProtein,
  summFat,
  summCarb,
  date,
}: InfographicsProps) {
  const personData = useSelector((state: State) => state.profile);
  const targets = useSelector((state: State) => state.history);

  const { targetProtein, targetFat, targetCarb } = calcNutrients(
    personData.targetMetabolism
  );

  const now = new Date();
  const nowDateStr = formatDate(Date.now());

  const timeDayRatio = (now.getHours() * 60 + now.getMinutes()) / (24 * 60);
  const ratio = (summ: number, target: number) => summ / target;

  const historyTarget = targets
    .slice()
    .reverse()
    .find((target) => setStartDay(target.timestamp) <= date);

  const procentCalories = Math.round(
    ratio(summCalories, personData.targetMetabolism) * 100
  );

  return (
    <InfographicsContainer>
      {!Number.isFinite(ratio(summCalories, personData.targetMetabolism)) ||
      !historyTarget ? (
        <LinkToProfile to="/profile">
          Если заполнить профиль, тут отобразятся графики
        </LinkToProfile>
      ) : nowDateStr === formatDate(date) ? (
        <>
          <Calories>
            <Target>
              <RealTime timeDayRatio={timeDayRatio}></RealTime>
              <RealData
                calRatio={ratio(summCalories, personData.targetMetabolism)}
              >
                <RealGradient
                  calRatio={ratio(summCalories, personData.targetMetabolism)}
                ></RealGradient>
              </RealData>
              <Procent
                calRatio={ratio(summCalories, personData.targetMetabolism)}
              >
                {procentCalories <= 120 ? `${procentCalories}%` : null}
              </Procent>
            </Target>
            <Label>Ккал</Label>
          </Calories>

          <Nutrients>
            <TargetN>
              <RealTimeN timeDayRatio={timeDayRatio}></RealTimeN>
              <RealDataN calRatio={ratio(summProtein, targetProtein)}>
                <RealGradientN
                  calRatio={ratio(summProtein, targetProtein)}
                ></RealGradientN>
              </RealDataN>
            </TargetN>
            <div></div>
            <div></div>
            <Label>Белки</Label>
          </Nutrients>
          <Nutrients>
            <div></div>
            <TargetN>
              <RealTimeN timeDayRatio={timeDayRatio}></RealTimeN>
              <RealDataN calRatio={ratio(summFat, targetFat)}>
                <RealGradientN
                  calRatio={ratio(summFat, targetFat)}
                ></RealGradientN>
              </RealDataN>
            </TargetN>
            <div></div>
            <Label>Жиры</Label>
          </Nutrients>
          <Nutrients>
            <div></div>
            <div></div>
            <TargetN>
              <RealTimeN timeDayRatio={timeDayRatio}></RealTimeN>
              <RealDataN calRatio={ratio(summCarb, targetCarb)}>
                <RealGradientN
                  calRatio={ratio(summCarb, targetCarb)}
                ></RealGradientN>
              </RealDataN>
            </TargetN>
            <Label>Угл-ды</Label>
          </Nutrients>
        </>
      ) : (
        <>
          <Calories>
            <Target>
              <RealData
                calRatio={ratio(summCalories, historyTarget.targetMetabolism)}
              >
                <RealGradient
                  calRatio={ratio(summCalories, historyTarget.targetMetabolism)}
                ></RealGradient>
              </RealData>
            </Target>
            <Label>Калории</Label>
          </Calories>

          <Nutrients>
            <TargetN>
              <RealDataN calRatio={ratio(summProtein, targetProtein)}>
                <RealGradientN
                  calRatio={ratio(summProtein, targetProtein)}
                ></RealGradientN>
              </RealDataN>
            </TargetN>
            <div></div>
            <div></div>
            <Label>Белки</Label>
          </Nutrients>
          <Nutrients>
            <div></div>
            <TargetN>
              <RealDataN calRatio={ratio(summFat, targetFat)}>
                <RealGradientN
                  calRatio={ratio(summFat, targetFat)}
                ></RealGradientN>
              </RealDataN>
            </TargetN>
            <div></div>
            <Label>Жиры</Label>
          </Nutrients>
          <Nutrients>
            <div></div>
            <div></div>
            <TargetN>
              <RealDataN calRatio={ratio(summCarb, targetCarb)}>
                <RealGradientN
                  calRatio={ratio(summCarb, targetCarb)}
                ></RealGradientN>
              </RealDataN>
            </TargetN>
            <Label>Угл-ды</Label>
          </Nutrients>
        </>
      )}
    </InfographicsContainer>
  );
}

export default Infographics;
