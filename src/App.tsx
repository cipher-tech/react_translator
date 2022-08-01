import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import theme from "./theme/theme";
import { Instructions, NavBar, Spinner, TranslationElement } from "./components";
import GlobalStyle from "./theme/globalStyles";
import { TranslatorProvider } from "./context";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

function App() {
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    setIsLoading(!isLoading);
  }, [])

  return (
    <>
      {
        isLoading ?
          <Spinner />
          :
          <TranslatorProvider>
            <Container style={{ display: "flex" }}>
              <ThemeProvider theme={theme}>
                <>
                  <GlobalStyle />
                  <NavBar />
                  <Instructions />
                  <TranslationElement />
                </>
              </ThemeProvider>
            </Container>
          </TranslatorProvider>
      }
    </>
  );
}

export default App;
