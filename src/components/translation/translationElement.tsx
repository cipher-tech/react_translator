import styled from "styled-components";
import translate from "../../api";
import { Button } from "../button/button";
import { TranslatorBox } from "./translatorBox";
import { useContext } from "react";
import { TranslatorContext } from "../../context";
const Container = styled.div`
    border-radius: .78rem;
    overflow: hidden;
    margin-top: -3rem;
    width: 96%;
    display: flex;
    align-self: center;
    justify-content: center;
    align-content: center;
    box-shadow: 0px 2px 5px ${ (props) => props.theme.colors.colorLight };
    @media only screen and (max-width: ${ (props) =>
        props.theme.breakPoints.bpLarge }) {
        flex-wrap: wrap;
    }
`;

const SuggestionBox = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    padding: 2rem 1rem;

    .suggestions{
      &-icon{
        padding: 0rem 1rem
      }
    }
`;
const Phrases = styled.div`
    width: 96%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: center;
    color: ${ (props) => props.theme.colors.colorLight };
    .phrases {
        &-list {
            display: flex;
            flex-wrap: wrap;
            list-style-type: none;
        }
    }
`;

export const TranslationElement = () => {
    const { translatorState, updateTextInput } = useContext(TranslatorContext)
    return (
        <>
            <Container className="translationElement">
                <TranslatorBox
                    position={'rightInput'}
                    languagePosition={'languageRight'}
                />
                <TranslatorBox
                    position={'leftInput'}
                    languagePosition={'languageLeft'} />
            </Container>
            <SuggestionBox className="suggestions">
                <Button onClick={() => {
                    translate(translatorState[ translatorState.current ],
                        translatorState.from,
                        translatorState.to,
                        updateTextInput,
                        translatorState.current
                        )
                }}>
                    <span>Translate</span>
                    <i className="bi bi-arrow-left-right suggestions-icon"></i>
                </Button>
            </SuggestionBox>
            <Phrases className="phrases">
                <h3>Widely used phrases:</h3>
                <ul className="phrases-list">
                    <li className="phrases-list__item">
                        <Button rounded>Hello there!</Button>
                    </li>
                    <li className="phrases-list__item">
                        <Button rounded>Hello there!</Button>
                    </li>
                    <li className="phrases-list__item">
                        <Button rounded>Hello there!</Button>
                    </li>
                    <li className="phrases-list__item">
                        <Button rounded>Hello there!</Button>
                    </li>
                    <li className="phrases-list__item">
                        <Button rounded>Hello there!</Button>
                    </li>
                </ul>
            </Phrases>
        </>
    );
};

export default TranslationElement;
