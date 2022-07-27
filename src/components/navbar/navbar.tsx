import styled from "styled-components";

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
    a {
        cursor: pointer;
    }
    .nav{
        &-icon{
            display: flex;
            &__text{
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
                <a className="nav-icon__text" href="/">LanTrans App</a>
            </div>
            <p className="nav-greeting">
                Hi, there
            </p>
        </Nav>
    );
};
