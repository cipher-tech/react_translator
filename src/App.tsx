import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import theme from "./theme/theme";
import { Instructions, NavBar, TranslationElement } from "./components";
import GlobalStyle from "./theme/globalStyles";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
function App() {
    return (
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
    );
}

export default App;
