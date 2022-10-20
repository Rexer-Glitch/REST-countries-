import styled, {css} from "styled-components";
import THEME from "../utils/theme";
import {Link} from "react-router-dom";

export const ThemeToggler = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 1.4rem;

  cursor: pointer;
`;

export const Text = styled(Link)`
  font-size: 1.4rem;
  text-decoration: none;

  color: black;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 50px 20px;

  color: ${THEME.COLOR.light.TEXT};
  background: white;

  transition: all ease-in-out 250ms;

  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);
  position: relative;

  & ${ThemeToggler} img {
    filter: ${(props) => props.theme === "dark" && "invert(100%)"};
  }

  ${props => props.theme === "dark" && css`
      background: ${THEME.COLOR.dark.ELEMENTS};
      color: white;

      ${Text} {
        color: white;
      }
  `}

  @media (min-width: 768px) {
    padding: 25px 5%;
  }


`;


