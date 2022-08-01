import styled from "styled-components";

// define reusable button component
type IProps = {
    rounded?: boolean
    disabled?: boolean
}
export const Button = styled.button<IProps>`
    background: ${(props) => props.theme.colors.colorWhite}; ;
    color: ${(props) => props.theme.colors.colorPrimary};
    font-size: ${(props) => props.theme.font.size.xxxSmall};
    padding: 1rem 2rem;
    border-radius: ${(props) => props.rounded ? "5rem" : "0.5rem"};
    border: .01rem solid ${(props) => props.theme.colors.colorPrimary};
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: fit-content;
    align-self: center;
    place-items: center;
    transition: all .2s linear;
    margin: 1rem;
    :focus {
        outline: none;
    }
    :hover {
        background: ${(props) => props.theme.colors.colorPrimaryLight};
    }
`;
