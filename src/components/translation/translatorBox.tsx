import styled from "styled-components";
import Header from "./header";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-self: center;
    justify-content: space-between;
    align-content: flex-start;
    flex-direction: column;
    color: ${(props) => props.theme.colors.colorLight};
    a {
        cursor: pointer;
    }
    &:nth-child(2) {
        background: ${(props) => props.theme.colors.colorGrey2};
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
                }
            }
        }
    }
`;
export const TranslatorBox = () => {
    return (
        <Container className="translatorBox">
            <Header />
            <div className="translatorBox-input">
                <div className="translatorBox-input__area">
                    <textarea
                        className="translatorBox-input__area--input"
                        name="input"
                        id="1"
                        cols={50}
                        rows={10}
                    >
                        Enter text
                    </textarea>
                    <span className="translatorBox-input__area--clear">
                        <i className="bi bi-x-lg"></i>
                    </span>
                </div>
                <div className="translatorBox-input__footer">
                    <div className="translatorBox-input__footer--speech">
                        <span className="translatorBox-input__footer--speech--toText">
                            <i className="bi bi-mic-fill"></i>
                        </span>
                        <span className="translatorBox-input__footer--speech--toVoice">
                            <i className="bi bi-volume-up-fill"></i>
                        </span>
                    </div>
                    <span>45/200</span>
                </div>
            </div>
        </Container>
    );
};
