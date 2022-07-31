import REACT, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import ReactTooltip from 'react-tooltip'
import { TranslatorContext } from "../../context";
import { inputPosition, languagePosition } from "../../context/translatorContext";
import Header from "./header";
import useSpeechToText from "../../hooks/useSpeechToText";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-self: center;
    justify-content: space-between;
    align-content: flex-start;
    flex-direction: column;
    color: ${ (props) => props.theme.colors.colorLight };
    a {
        cursor: pointer;
    }
    &:nth-child(2) {
        background: ${ (props) => props.theme.colors.colorGrey2 };
    }
    .translatorBox-input {
        padding: 0.5rem 1rem;
        display: flex;
        flex-direction: column;

        &__area {
            display: flex;

            justify-content: space-between;
            &--input {
                border: none;
                flex: 1;
                background: none;
                :focus{
                    outline: none;
                }
            }
        }
        &__footer {
            padding: 0rem 1rem;
            display: flex;
            justify-content: space-between;
            align-content: center;
            align-items: center;
            &--speech {
                display: flex;
                span {
                    padding: 1rem;
                    border-radius: 50%;
                    transition: all 0.3s linear;
                    :hover {
                        background: ${ (props) => props.theme.colors.colorPrimaryLight };
                    }
                }
            }
        }
    }
`;

type IProps = {
    position: inputPosition
    languagePosition: languagePosition
}
export const TranslatorBox = ({ position, languagePosition }: IProps) => {
    const [ activateSpeech, setActivateSpeech ] = useState(false)
    const [ transcript ] = useSpeechToText(activateSpeech);

    const { translatorState, updateTextInput, clearInputs } = useContext(TranslatorContext)

    let textContent = translatorState[ position ];
    const isLeftInput = position === 'leftInput';

    useEffect(() => {
        updateTextInput('rightInput', transcript);
        setActivateSpeech(false)
    }, [transcript]) 
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (textContent.length === 200) {
            return
        }
        updateTextInput(position, e.target.value)
    }

    const handleSpeechToText = (e: REACT.MouseEvent<HTMLElement, MouseEvent>) => {
        setActivateSpeech(!activateSpeech);
    }
    return (
        <Container className="translatorBox">
            <Header position={position} languagePosition={languagePosition} />
            <div className="translatorBox-input">
                <div className="translatorBox-input__area">
                    <textarea
                        className="translatorBox-input__area--input"
                        name="input"
                        id="1"
                        value={textContent || ''}
                        onChange={(e) => { handleChange(e) }}
                        cols={50}
                        rows={10}
                        placeholder="Enter text here"
                    >
                        Enter text
                    </textarea>

                    {
                        !isLeftInput ?
                            <span className="translatorBox-input__area--clear">
                                <i className="bi bi-x-lg" onClick={() => clearInputs()}></i>
                            </span>
                            : null
                    }
                </div>
                <div className="translatorBox-input__footer">
                    <div className="translatorBox-input__footer--speech">
                        <span className="translatorBox-input__footer--speech--toText">
                            {isLeftInput ?
                                <i className="bi bi-clipboard" data-tip={`Copy to clipboard`}></i>
                                :
                                <i className="bi bi-mic-fill" data-tip={`Translate by voice`} onClick={(e) => handleSpeechToText(e)}></i>
                            }
                        </span>
                        <span className="translatorBox-input__footer--speech--toVoice">
                            {isLeftInput ?
                                <i className="bi bi-star" data-tip={`Save Translation`}></i>
                                :
                                <i className="bi bi-volume-up-fill" data-tip={`Listen`}></i>
                            }

                        </span>
                    </div>
                    <span>{textContent.length}/200</span>
                </div>
            </div>
            <ReactTooltip delayHide={300} />
        </Container>
    );
};
