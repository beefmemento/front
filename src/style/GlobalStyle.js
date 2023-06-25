import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
     body {
        max-width : 430px;
        min-width : 390px;
        margin : 0 auto;
     }
`;

export default GlobalStyle;
