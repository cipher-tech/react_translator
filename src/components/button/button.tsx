import styled from "styled-components";

export const Button = styled.button`
    background: ${(props) => props.theme.colors.colorWhite}; ;
    color: ${(props) => props.theme.colors.colorPrimary};
    font-size: ${(props) => props.theme.font.size.xxxSmall};
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    border: .01rem solid ${(props) => props.theme.colors.colorPrimary};
    display: flex;
    cursor: pointer;
    width: fit-content;
    align-self: center;
    place-items: center;
    transition: all .2s linear;
    margin: 2rem;
    :focus {
        outline: none;
    }
    :hover {
        background: ${(props) => props.theme.colors.colorPrimaryLight};
    }
    @media only screen and (max-width: ${(props) =>
            props.theme.breakPoints.bpSmall}) {
        padding: 1rem 2rem;
    }
`;
