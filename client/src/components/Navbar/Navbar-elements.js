import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
background: #f7df1e;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 4000;
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;

${Container}
`;

export const NavLogo = styled(Link)`
color: #202020;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-weight: bold;
font-size: 1.5rem;
display: flex;
align-items: center;
`;

export const Img = styled.img`
margin-right: 0.5rem;
height: 50%;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    align-items: center;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-110%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #202020;
}
`;

export const NavItem = styled.li`
height: 80px;
border-bottom: 2px solid transparent;

&:hover {
    border-bottom: 2px solid #202020;
}

@media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
        border: none;
    }
}
`

export const NavLinks = styled(Link)`
color: #202020;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;

@media screen and (max-width: 960px) {
    color: #fff;
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
        color: #f7df1e;
        transition: all 0.3s ease;
    }
}
`;

export const SocialMediaLink = styled(Link)`
    display: none;

@media screen and (max-width: 960px) {
    display: ${({ click }) => (click ? '' : '')};
    color: #fff;
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    background-color: #fff;

    &:hover {
        color: #f7df1e;
        transition: all 0.3s ease;
    }
}
`;


