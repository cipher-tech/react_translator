import styled from "styled-components";

const Container = styled.div`
   
            background: ${(props) => props.theme.colors.colorWhite};
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            border-bottom: 0.001rem solid
                ${(props) => props.theme.colors.colorLight};
            border-radius: 0.7rem 0 0 0;
            &:nth-child(2) {
                border-radius: 0 0.7rem 0 0;
            }
            .main{

                &-selected {
                    font-size: ${(props) => props.theme.font.size.xxxxSmall};
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
                        a {
                            padding: 2rem 2rem;
                            width: 100%;
                            height: 100%;
                            display: flex;
                            justify-content: center;
                            &:hover {
                                color: ${(props) =>
                                    props.theme.colors.colorTextDark2};
                            }
                        }
                        &:first-child {
                            color: ${(props) => props.theme.colors.colorPrimary};
                            border-bottom: 0.1rem solid
                                ${(props) => props.theme.colors.colorPrimary};
                        }
                    }
                }
            }
`;
const Header = () => {
    return (
        <Container className="main">
                <span className="main-selected">english</span>
                <ul className="main-languageList">
                    <li className="main-languageList__item">
                        <a href="/#">English</a>
                    </li>
                    <li className="main-languageList__item">
                        <a href="/#">German</a>
                    </li>
                    <li className="main-languageList__item">
                        <a href="/#">Russian</a>
                    </li>
                </ul>
        </Container>
    );
};

export default Header;
