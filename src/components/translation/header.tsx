import styled from "styled-components";
import { useContext } from "react";
import { TranslatorContext } from "../../context";
import { inputPosition, languagePosition } from "../../context/translatorContext";

const Container = styled.div`
   
            background: ${ (props) => props.theme.colors.colorWhite };
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            border-bottom: 0.001rem solid
                ${ (props) => props.theme.colors.colorLight };
            border-radius: 0.7rem 0 0 0;
            &:nth-child(2) {
                border-radius: 0 0.7rem 0 0;
            }
            .main{

                &-selected {
                    font-size: ${ (props) => props.theme.font.size.xxxxSmall };
                    padding: 1rem;
                }
                &-languageList {
                    display: flex;
                    flex: 1;
                    justify-content: space-evenly;
                    list-style-type: none;
                    &__item {
                        display: flex;
                        justify-self: center;
                        justify-content: center;
                        width: 100%;
                        transition: all 0.1s linear;
                        a {
                            transition: all 0.1s linear;
                            padding: 2rem 2rem;
                            width: 100%;
                            height: 100%;
                            display: flex;
                            justify-content: center;
                            &:hover {
                                color: ${ (props) =>
        props.theme.colors.colorTextDark2 };
                            }
                        }
                    }
                    .active {
                        transition: all 0.1s linear;
                        color: ${ (props) => props.theme.colors.colorPrimary };
                        border-bottom: 0.1rem solid
                            ${ (props) => props.theme.colors.colorPrimary };
                    }
                }
            }
`;

type IProps = {
    position: inputPosition
    languagePosition: languagePosition
}
const Header = ({ position, languagePosition }: IProps) => {
    const { translatorState: { selectedLanguage }, updateLanguage } = useContext(TranslatorContext)
    const options = {
        rightInput: [ 'English' ],
        leftInput: [ 'German', 'Russian', 'French' ],
    }
    return (
        <Container className="main">
            <span className="main-selected">
            <i className="bi bi-translate nav-icon__logo"></i>
            </span>
            <ul className="main-languageList">
                {options[ position ].map(option => (
                    <li
                        key={option}
                        className="main-languageList__item"
                        onClick={() => { updateLanguage(option) }}>
                        <a className={selectedLanguage === option ? "active" : ''} href="/#">{option}</a>
                    </li>
                ))
                }

            </ul>
        </Container>
    );
};

export default Header;
