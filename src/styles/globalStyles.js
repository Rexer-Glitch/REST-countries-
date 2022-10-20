import { createGlobalStyle } from "styled-components";
import THEME from "../utils/theme";

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: ${THEME.FONT.FAMILY};
    }
`;

export default GlobalStyles;
