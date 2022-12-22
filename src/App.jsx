import Generator from "./components/Generator";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme.styles";
import { Page } from "./styles/App.styles";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Page>
        <GlobalStyle />
        <Generator />
      </Page>
    </ThemeProvider>
  );
}
