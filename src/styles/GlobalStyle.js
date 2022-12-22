import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: "Kanit", sans-serif;
    font-size: 16px;
    background-color: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.white};
}

`

export { GlobalStyle }