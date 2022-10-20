import styled, {css, keyframes} from "styled-components";

const appear = keyframes`
    from{
        opacity: 0;
    }to{
        opacity: 1;
    }
`;

export const Message = styled.h2`
    font-size: 1.4rem;
`;

export const Container = styled.div`
    position: absolute;
    z-index: 100;

    left: 50%;
    bottom: 10px;

    transform: translateX(-50%);

    padding: 10px 15px;

    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.3);

    ${props => props.theme && css`
        background: ${props.theme.bg};
        color: ${props.theme.color};
    `}

    animation: ${appear} 0.4s linear;

`;