import styled from "@emotion/styled/macro";
import { lightPurple, mediumPurple, purple, white } from "../../styles/colors";

export const Graph = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  align-items: center;
  margin: 30px 0 0;
`;

export const TargetCalories = styled.div`
  height: 12px;
  position: relative;
  background: ${lightPurple};
  border: 1px solid ${mediumPurple};
`;

export const RealTime = styled.div<{ timeDayRatio: number }>`
  height: 20px;
  width: ${({ timeDayRatio }) => `calc(100% * ${timeDayRatio})`};
  position: absolute;
  top: -4px;
  border-right: 2px solid ${purple};
`;

export const RealCalories = styled.div<{
  calRatio: number;
}>`
  height: 10px;
  position: absolute;
  top: 1px;
  left: 1px;
  position: relative;
  width: ${({ calRatio }) => `calc(${calRatio} * 100%)`};
  box-sizing: border-box;
  overflow: hidden;
`;

export const Procent = styled.p<{
  calRatio: number;
}>`
  position: absolute;
  top: 5px;
  right: ${({ calRatio }) => `calc(100% - (${calRatio} * 100%))`};
  font-size: 10px;
  line-height: 10px;
  font-weight: 300;
`;

export const RealCaloriesGradient = styled.div<{
  calRatio: number;
}>`
  height: 12px;
  width: ${({ calRatio }) => `calc(125% / ${calRatio})`};
  background: linear-gradient(
    90deg,
    rgba(5, 129, 158, 1) 0%,
    rgba(5, 129, 158, 1) 60%,
    rgba(243, 199, 0, 1) 80%,
    rgba(157, 77, 208, 1) 100%
  );
  opacity: 0.5;
`;

export const Label = styled.p`
  font-size: 12px;
  line-height: 14px;
  font-weight: 300;
  text-align: start;
  margin: 0 0 0 10px;
  z-index: 1;
`;
