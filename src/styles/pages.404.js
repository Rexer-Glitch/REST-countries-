import styled, {css} from "styled-components";
import {Link} from "react-router-dom";
import THEME from "../utils/theme";

export const Text = styled.h1`
    text-align: center;
    font-size: 5rem;
    margin-bottom: 50px;

    color: black;
`;

export const Button = styled(Link)`
    text-decoration: none;

    padding: 12px 20px;

    border-radius: 5px;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.3);

    color: ${THEME.COLOR.light.TEXT};
    background: ${THEME.COLOR.light.INPUT};
`;

export const Container = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 92vh;
    width: 100%;

    background: ${THEME.COLOR.light.BACKGROUND};

    ${props => props.theme === "dark" && css`
    background: ${THEME.COLOR.dark.BACKGROUND};
            & ${Text} {
                color: white;
            }

            & ${Button} {
                background: ${THEME.COLOR.dark.ELEMENTS};
                color: white;
            }
    `}
`;