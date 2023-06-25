import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
     body {
        max-width : 390px;
        max-height : 844px;
        margin : 0 auto;
     }
`;

export default GlobalStyle;
