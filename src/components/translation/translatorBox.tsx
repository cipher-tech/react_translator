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
    .translatorBox-input {
        height: 20rem;
        padding: 0.5rem 1rem;
        display: flex;
        flex-direction: column;
        &__area{
          display: flex;
          justify-content: space-between;
          &--input{
            border: none;
            flex: 1;
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
                  <textarea className="translatorBox-input__area--input" name="input" id="1" cols={50} rows={10}>Enter text</textarea>
                  <span className="translatorBox-input__area--clear">X</span>
                </div>
                <div className="translatorBox-input__footer">
                  
                </div>
            </div>
            
        </Container>
    );
};
