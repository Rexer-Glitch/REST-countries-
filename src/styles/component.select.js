import styled, { css, keyframes} from "styled-components";
import THEME from "../utils/theme";

const animateOptions = keyframes`
    from{
        height: 0;
    }to{
        height: 100%;
    }
`;

export const Text = styled.p`
  
`;

export const Icon = styled.img`
  width: 24px;

  cursor: pointer;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 25px 35px;
  border-radius: 5px;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);
`;

export const Option = styled.div`
    cursor: pointer;

    &:hover {
      color: ${THEME.COLOR.light.INPUT};
    }
`;

export const OptionsContainer = styled.div`
  padding: 0 35px;
  border-radius: 5px;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);

  margin-top: 10px;

  position: absolute;
  width: 100%;

  background: white;

  z-index: 2;


  & ${Option}:first-child{
    padding-top: 35px 
  }

  &  ${Option}:last-child {
    padding-bottom: 35px;
  }

  & ${Option} + ${Option} {
    margin-top: 15px;
  }

  animation: ${animateOptions} 0.25s linear;

  overflow: hidden;
`;

export const Container = styled.div`
    font-size: 1.2rem;
    font-weight: ${THEME.FONT.WEIGHTS.LIGHT};

    width: 100%;
    max-width: 340px;

    position: relative;

    ${props => props.theme === "dark" && css`
      & ${TextContainer}, ${OptionsContainer} {
        background: ${THEME.COLOR.dark.ELEMENTS};
        color: ${THEME.COLOR.common.WHITE};
      }

      & ${Icon} {
        filter: invert(100%);
      }
    `}
`;
