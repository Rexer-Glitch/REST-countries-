import styled, {css} from "styled-components";
import THEME from "../utils/theme";



export const NoMatch = styled.p`
    margin-top: 50px;
    font-size: 1.2rem;
`;

export const LoaderContainer = styled.div`
    position: absolute;

    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;


    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);

    z-index: 3;
`;

export const Loader = styled.img`
    filter: invert(90%);
`;

export const LoaderText = styled.h3`
    font-size: 1.6rem;
    margin-top: 10px;

    opacity: 0.8;
    color: black;

    text-align: center;
`;

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

export const CountriesContainer = styled.div`
    padding: 40px 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 50px;
    grid-column-gap: 50px;

    justify-items: center;

`;

export const Container = styled.main`
    min-height: 92vh;
    padding: 30px 20px;

    background: ${THEME.COLOR.light.BACKGROUND};

    ${props=> props.theme === "dark" && css`
        background: ${THEME.COLOR.dark.BACKGROUND};

        & ${LoaderText} {
            color: white;
        }

        & ${Loader} {
            filter: invert(10%);
        }

        & ${NoMatch} {
            color: white;
        }
    `}

    @media (min-width: 768px) {
        padding: 30px 5%;
    }

    @media (min-width: 900px){
       
        & ${CountriesContainer} {
            grid-template-columns: 1fr 1fr;
            align-items: unset;
        }

    }

    @media (min-width: 1180px){
        & ${CountriesContainer} {
            grid-template-columns: 1fr 1fr 1fr;
        }

        & ${InputsContainer} {
            flex-direction: row;
            justify-content: space-between;
            gap: unset;

        }

    }

    @media (min-width: 1440px) {
            & ${CountriesContainer} {
                grid-template-columns: 1fr 1fr 1fr 1fr;
            }
    
        }
    }

`;