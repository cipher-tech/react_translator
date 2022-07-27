import styled from "styled-components";
import { TranslatorBox } from "./translatorBox";

const Container = styled.div`
    margin-top: -3rem;
    width: 96%;
    display: flex;
    align-self: center;
    justify-content: center;
    align-content: center;
    box-shadow: 0px 2px 5px ${(props) => props.theme.colors.colorLight};
`;
export const TranslationElement = () => {
  return (
    <Container>
      <TranslatorBox />
      <TranslatorBox />
    </Container>
  )
}

export default TranslationElement