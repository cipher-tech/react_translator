import styled, { keyframes } from "styled-components";

const Spin = keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`
const Loader = styled.div`
    display: flex;
    place-content: center;
    padding: 0rem 1rem;
    place-items: center ;
    transition: all 1s linear;
    animation: ${ Spin } 1s linear infinite;;
`

export const Spinner = () => {
  return (
    <Loader><i className="bi bi-arrow-counterclockwise"></i></Loader>
  )
}
