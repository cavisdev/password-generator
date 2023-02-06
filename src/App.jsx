import Generator from "./Generator";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme.styles";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Generator />
    </ThemeProvider>
  );
}
