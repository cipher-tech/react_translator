import styled from "styled-components";
import translate from "../../api";
import { Button } from "../button/button";
import { TranslatorBox } from "./translatorBox";
import { useContext, useEffect } from "react";
import { TranslatorContext } from "../../context";
import useDebounce from "../../hooks/useDebounce";
import { Spinner } from "../spinner/spinner";
// import useSpeechToText from "../../hooks/useSpeechToText";
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
    const { translatorState, updateTextInputFromApi, updateTextInput} = useContext(TranslatorContext)
    const { leftInput, rightInput } = translatorState
    useDebounce([ leftInput, rightInput ])
    const phrases = [
        'Hello there!',
        'Good morning',
        'Goodbye',
        'How are you?',
    ]

    const handlePhraseChange = (phrase: string) => {
        if(phrase === translatorState[ translatorState.current ]) return
        updateTextInput('rightInput', phrase); 
    }
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
                        updateTextInputFromApi,
                        translatorState.current
                    )
                }}>
                    <span>Translate</span>
                    {translatorState.isLoading ? <Spinner /> : <i className="bi bi-arrow-left-right suggestions-icon"></i>}

                </Button>
            </SuggestionBox>
            <Phrases className="phrases">
                <h3>Widely used phrases:</h3>
                <ul className="phrases-list">
                    {
                        phrases.map(phrase => (
                            <li key={phrase} className="phrases-list__item"
                                onClick={ (e) =>{handlePhraseChange(phrase)}}
                            >
                                <Button rounded>{phrase}</Button>
                            </li>

                        ))
                    }
                </ul>
            </Phrases>
        </>
    );
};

export default TranslationElement;
