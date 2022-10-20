import styled, {css} from "styled-components";
import {Link} from "react-router-dom";
import THEME from "../utils/theme";

const BORDER_RADIUS = "5px";

export const Capital = styled.h3``;

export const Region = styled.h3``;

export const Population = styled.h3``;

export const Name = styled.h1`
    font-size: 2rem;
    font-weight: ${THEME.FONT.WEIGHTS.EXTRABOLD};
    margin-bottom: 30px;
`;

export const Flag = styled.img`
    display: inline-block;
    width: 100%;
    height: 230px;
    
    border-radius: ${BORDER_RADIUS} ${BORDER_RADIUS} 0 0;

    color: white;

    position: relative;

    text-align: center;

    &::before {
        content: "";
        background: ${THEME.COLOR.dark.ELEMENTS};
        width: 100%;
        height: 100%;
        border-radius: ${BORDER_RADIUS} ${BORDER_RADIUS} 0 0;
        
        position: absolute;
        top: 0px;
        left: 0;
    }

    &::after {
        content: attr(alt);

        color: white;
        font-size: 1.2rem;

        
        display: block;
        position: absolute;

        z-index: 2;

        width: 100%;
        height: 100%;

        text-align: center;

        text-transform: uppercase;
    }
`;

export const DetailsContainer = styled.div`
    padding: 30px 40px 50px;

    
    & h3 {
        
        font-size: 1.2rem;
        font-weight: ${THEME.FONT.WEIGHTS.LIGHT};
    }

    & h3 + h3 {
        margin-top: 10px;
    }

    & h3 b {
        font-weight: ${THEME.FONT.WEIGHTS.SEMIBOLD};
    }
`;

export const FlagContainer = styled.div`
    
    border-radius: ${BORDER_RADIUS} ${BORDER_RADIUS} 0 0;
    display: flex;
    align-items: center;
`;

export const Container = styled(Link)`

    text-decoration: none;
    color: black;

    
    border-radius: ${BORDER_RADIUS};
    box-shadow: 1px 1px 20px rgba(0,0,0,0.2);

    width: 100%;
    max-width: 400px;

    transition: background ease-in-out 250ms;

    ${props => props.theme === "dark" && css`

        background: ${THEME.COLOR.dark.ELEMENTS};
        color: ${THEME.COLOR.common.WHITE};

        & ${FlagContainer} {
            background: white;
        }

        & ${Flag} {
            &::before {
                background: white;
            }

            &::after {
                color: black;
            }
        }

    

    `}
`;

