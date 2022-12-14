import ReactTooltip from "react-tooltip";
import styled from "styled-components";

const Container = styled.div`
    background: ${ (props) => props.theme.colors.colorGrey2 };
    width: 100%;
    padding: .5rem 2rem;
    padding-bottom: 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    font-size: ${ (props) => props.theme.font.size.xxxxSmall };
    .instructions {
        display: flex;
        flex-direction: column;
        &-header {
            padding: 1rem 0;
            color: ${ (props) => props.theme.colors.colorLight };
            display: flex;
        }
        &-text {
            padding: .2rem 0;
            line-height: 1.85rem;
            color: ${ (props) => props.theme.colors.colorLight };
            display: flex;
        }
    }
    
`;
export const Instructions = () => {
    return <Container >
        <div className="instructions">
            <h3 className="instructions-header" data-tip="Instructions">
                Instructions:
            </h3>
            <p className="instructions-text" data-tip="Instructions">
                - Type the text you wish to translate into any of the input boxes <br />
                - Select the Language you wish to translate to and from on the right side<br />
                - Click the X icon to clear both inputs <br />
                - As you type the text will be translated automatically <br />
                - You can click the translate button to translate manually.
            </p>
        </div>
        <div className="instructions">
            <h3 className="instructions-header" data-tip="Instructions">
                Shortcuts::
            </h3>
            <p className="instructions-text" data-tip="Instructions">
                - Press SHIFT and G to select German <br />
                - Press SHIFT and R to select Russian <br />
                - Press SHIFT and F to select French <br />
            </p>
        </div>
        <ReactTooltip delayHide={300} />
    </Container>;
};
