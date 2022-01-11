import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import { lightPurple, mediumPurple, purple } from "../../styles/colors";
import { HoverAnimation } from "../../styles/patterns";

export const InfographicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

export const LinkToProfile = styled(Link)`
  width: 100%;
  background: ${lightPurple};
  border: 1px solid ${mediumPurple};
  border-radius: 5px;
  font-size: 18px;
  line-height: 20px;
  font-weight: 300;
  text-decoration: none;
  margin: 20px 0 0;

  ${HoverAnimation}
`;

export const Calories = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 1fr;
  align-items: center;
  margin: 30px 0;
`;

export const Nutrients = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 6fr 6fr 8fr 5fr;
  align-items: center;
  margin: 0 0 5px;
`;

export const Target = styled.div`
  height: 12px;
  position: relative;
  background: ${lightPurple};
  border: 1px solid ${mediumPurple};
`;

export const TargetN = styled(Target)`
  height: 8px;
`;

export const RealTime = styled.div<{ timeDayRatio: number }>`
  height: 20px;
  width: ${({ timeDayRatio }) => `calc(100% * ${timeDayRatio})`};
  position: absolute;
  top: -4px;
  border-right: 2px solid ${purple};
`;

export const RealTimeN = styled(RealTime)`
  height: 16px;
  border-right: 1px solid ${purple};
`;

export const RealData = styled.div<{
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

export const RealDataN = styled(RealData)`
  height: 6px;
`;

export const Procent = styled.p<{
  calRatio: number;
}>`
  position: absolute;
  top: 5px;
  right: ${({ calRatio }) => `calc(97% - (${calRatio} * 100%))`};
  font-size: 14px;
  line-height: 14px;
  font-weight: 300;
`;

export const RealGradient = styled.div<{
  calRatio: number;
}>`
  height: 12px;
  width: ${({ calRatio }) => `calc(125% / ${calRatio})`};
  background: linear-gradient(
    90deg,
    #d9cfff 0%,
    #d9cfff 60%,
    rgba(243, 199, 0, 1) 80%,
    rgba(157, 77, 208, 1) 100%
  );
  opacity: 0.4;
`;

export const RealGradientN = styled(RealGradient)`
  height: 8px;
`;

export const Label = styled.p`
  font-size: 12px;
  line-height: 14px;
  font-weight: 300;
  text-align: start;
  margin: 0 0 0 10px;
  z-index: 1;
`;
