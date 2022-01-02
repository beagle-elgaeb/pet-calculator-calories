import styled from "@emotion/styled/macro";
import { NavLink } from "react-router-dom";
import { lightPurple, mediumPurple, purple, yellow } from "../../styles/colors";
import { HoverAnimation } from "../../styles/patterns";

export const MenuContainer = styled.div`
  height: calc(100vh - 90px);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const ProfileData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Name = styled.h2`
  width: 100%;
  font-size: 23px;
  line-height: 25px;
  font-weight: 600;
  color: ${yellow};
  text-align: center;
  text-shadow: 0 1px 1px ${purple};
  margin: 0 0 30px;
`;

export const Calories = styled.p`
  font-size: 34px;
  line-height: 36px;
  font-weight: 600;
  color: ${lightPurple};
  -webkit-text-stroke: 2px ${yellow};
  text-shadow: 1px 2px 2px ${purple};
  align-self: center;
  margin: 0;
`;

export const Navigation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0 100px;
`;

export const NavigationButton = styled(NavLink)`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-top: 1px solid ${mediumPurple};
  font-size: 22px;
  line-height: 24px;
  font-weight: 200;
  color: ${purple};
  text-decoration: none;
  margin: 0;

  &.active {
    font-weight: 300;
    text-transform: uppercase;
  }

  :last-child {
    border-bottom: 1px solid ${mediumPurple};
  }

  :hover {
    height: 55px;
  }

  ${HoverAnimation}
`;
