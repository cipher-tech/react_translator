import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import theme from "./theme/theme";
import { Instructions, NavBar, Spinner, TranslationElement } from "./components";
import GlobalStyle from "./theme/globalStyles";
import { useEffect, useState } from "react";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

function App() {
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        setIsLoading(!isLoading);
    },[])
    return (
        <>
            {
                isLoading ?
                    <Spinner />
                    :
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
            }
        </>
    );
}

export default App;
