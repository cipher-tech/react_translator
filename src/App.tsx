import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import { NavBar } from "./components";
import GlobalStyle from "./theme/globalStyles";

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyle />
                    <NavBar />
                </>
            </ThemeProvider>
        </>
    );
}

export default App;
