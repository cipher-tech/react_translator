import styled from "styled-components";

const Container = styled.div`
    background: ${(props) => props.theme.colors.colorLightGrey};
    width: 100%;
    padding: 1.5rem 2rem;
    padding-bottom: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: flex-start;
    .instructions {
        &-header {
            padding: 1rem 0;
            color: ${(props) => props.theme.colors.colorLight};
            display: flex;
        }
        &-text {
            padding: 1rem 0;
            color: ${(props) => props.theme.colors.colorLight};
            display: flex;
        }
    }
    
`;
export const Instructions = () => {
    return <Container className="instructions">
        <h3 className="instructions-header">
            Instructions:
        </h3>
        <p className="instructions-text">
            - Type the text you wish to translate into any of the input boxes <br />
            - Type the text you wish to translate into any of the input boxes <br />
            - Type the text you wish to translate into any of the input boxes <br />
            - Type the text you wish to translate into any of the input boxes
        </p>
    </Container>;
};
