import styled, {css} from "styled-components";
import THEME from "../utils/theme";


export const Icon = styled.svg`
    fill: ${THEME.COLOR.light.INPUT};
    cursor: pointer;
`;

export const Input = styled.input`
    width: calc(100% - 50px);

    padding: 5px 10px;

    border: none;
    outline: none;

    background: transparent;
    color: ${THEME.COLOR.light.INPUT};

    font-size: 1.2rem;

    &::placeholder {
        font-weight: ${THEME.FONT.WEIGHTS.LIGHT};
        opacity: 0.6;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: white;

    transition: background ease-in-out 250ms;

    width: 100%;
    max-width: 600px;
    border-radius: 5px;
    padding: 20px 40px;
    box-shadow: 1px 2px 20px rgba(0,0,0,0.1);

    ${props => props.theme === "dark" && css`
        background: ${THEME.COLOR.dark.ELEMENTS};

        & ${Input} {
            color: white;

            &::placeholder {
                color: white;
            }
        }

        & ${Icon} {
            fill: white;
        }
    `}
`;