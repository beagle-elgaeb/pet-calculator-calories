import styled from "@emotion/styled/macro";
import { Link, NavLink } from "react-router-dom";
import { lightPurple, mediumPurple, purple, yellow } from "../../styles/colors";
import { HoverAnimation } from "../../styles/patterns";

export const MenuContainer = styled.div`
  height: calc(100vh - 97px);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Name = styled.h2`
  font-size: 23px;
  line-height: 25px;
  font-weight: 600;
  color: ${yellow};
  text-shadow: 0 1px 1px ${purple};
  margin: 0 0 30px;
`;

export const Parameter = styled.p`
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;
  color: ${purple};
  margin: 10px 0 0 0;
`;

export const Target = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 40px 0 0;
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

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 0 60px;
`;

export const Navigation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 0 10px 0;
`;

export const NavigationButton = styled(NavLink)`
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 14px;
  line-height: 16px;
  color: ${purple};
  text-decoration: none;
  margin: 0 0 10px 0;

  :hover {
    box-shadow: 0 0 5px 1px ${mediumPurple};
  }

  &.active {
    font-weight: 800;
  }

  ${HoverAnimation}
`;

export const EditProfileButton = styled(Link)`
  height: 36px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background: ${lightPurple};
  border: 1px solid ${mediumPurple};
  border-radius: 5px;
  font-size: 18px;
  line-height: 20px;
  color: ${purple};
  text-decoration: none;
  margin: 0;

  :hover {
    box-shadow: 0 0 5px 1px ${mediumPurple};
  }

  @media (max-width: 400px) {
    font-size: 16px;
    line-height: 18px;
  }

  ${HoverAnimation}
`;
