import styled from "styled-components";
import Logo from "../../assets/images/logo.png";
const Nav = styled.nav`
    background: ${(props) => props.theme.colors.colorWhite};
    width: 100%;
    padding: 1.5rem 2rem;
    height: 6rem;
    box-shadow: 0px 2px 5px ${(props) => props.theme.colors.colorLight};
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,.12);
    background-color: rgba(255,255,255,1);
    a {
        cursor: pointer;
    }
    .nav {
        &-icon {
            display: flex;
            align-items: center;
            &__logo{
                color: ${(props) => props.theme.colors.colorPrimary};
                padding: 0rem 1rem
            }
            &__text {
                color: ${(props) => props.theme.colors.colorLight};
            }
        }
    }
    .nav-greeting {
        color: ${(props) => props.theme.colors.colorLight};
        span {
            padding-left: 1rem;
        }
    }
`;
export const NavBar = () => {
    return (
        <Nav className="nav">
            <div className="nav-icon">
                <i className="bi bi-translate nav-icon__logo"></i>
                <a className="nav-icon__text" href="/">
                    MetaTranslate App
                </a>
            </div>
            <p className="nav-greeting">
                <i className="bi bi-github"></i>
            </p>
        </Nav>
    );
};
