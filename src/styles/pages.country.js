import styled, {css} from "styled-components";
import {Link} from "react-router-dom";
import THEME from "../utils/theme";


export const Languages = styled.h3``;
export const Name = styled.h1`
    font-size: 2rem;

    margin-bottom: 30px;
`;
export const NativeName = styled.h3``;
export const Population = styled.h3``;
export const Region = styled.h3``;
export const SubRegion = styled.h3``;
export const Capital = styled.h3``;
export const TopLevelDomain = styled.h3`
    margin-top: 25px;
`;
export const Currencies = styled.h3``;

export const BorderCountries = styled.div`
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    grid-gap: 20px;

    margin-top: 20px;
`;

export const BorderCountry = styled(Link)`
    font-size: 0.8rem;

    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    

    text-decoration: none;

    padding: 12px 15px;

    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);

    background: white;
    color: black;


`;

export const BackButton = styled(Link)`
    background: white;
    color: black;
    text-decoration: none;

    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    padding: 8px 20px;

    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);



`;

export const Flag = styled.img`
    width: 100%;
    max-height: 300px;
`;

export const Icon = styled.img`
    width: 25px;
`;

export const DetailsContainer = styled.div`
    flex: 1;
`;

export const FlagContainer = styled.div`
    flex: 0.8;
`;

export const InfoContainer = styled.div`
    margin: 100px 0 30px;

    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export const Container = styled.main`
    padding: 70px 5%;
    min-height: 92vh;

    & ${DetailsContainer} h3 {
        font-weight: normal;
        font-size: 1.2rem;
    }

    & ${DetailsContainer} h3 + h3:not(${TopLevelDomain}) {
        margin-top: 15px;
    }

    & ${TopLevelDomain} {
        margin-top: 50px;
    }

    @media (min-width: 768px){
        & ${InfoContainer} {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }


        & ${DetailsContainer} {
            flex: 1;
        }

        & ${FlagContainer} {
        

            flex: 1;
        }

        & ${Flag} {
            height: 100%;
            max-height: 100%;
        }
    }

   @media (min-width: 1200px) {
    & ${DetailsContainer} > div:not(${BorderCountries}) {
        display: flex;
        justify-content: space-between;
        
        & div:first-child{
            flex: 1.1;
        }

        & div:last-child {
            flex: 1;
            margin-top: 15px;
        }
            
    }

    & ${BorderCountries} {
        width: 80%;
    }
   }

   @media (min-width: 1440px) {
    & ${FlagContainer} {
        margin-right: 5%;
    }
   }

    ${props => props.theme === "dark" && css`
        background: ${THEME.COLOR.dark.BACKGROUND};
        color: white;
        & ${BackButton} {
            background: ${THEME.COLOR.dark.ELEMENTS};
            color: white;

            & img {
                filter: invert(100%);
            }
        }

        & ${BorderCountry} {
            background: ${THEME.COLOR.dark.ELEMENTS};
            color: white;
        }
    `}
`;
