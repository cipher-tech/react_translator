import styled from "styled-components";
import { Button } from "../button/button";
import { TranslatorBox } from "./translatorBox";

const Container = styled.div`
    margin-top: -3rem;
    width: 96%;
    display: flex;
    align-self: center;
    justify-content: center;
    align-content: center;
    box-shadow: 0px 2px 5px ${(props) => props.theme.colors.colorLight};
`;

const SuggestionBox = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    padding: 2rem 1rem;
    &-suggestions {
    }
`;
export const TranslationElement = () => {
    return (
        <>
            <Container className="translationElement">
                <TranslatorBox />
                <TranslatorBox />
            </Container>
            <SuggestionBox className="translationElement-suggestions">
                <Button>Translate</Button>
            </SuggestionBox>
        </>
    );
};

export default TranslationElement;
