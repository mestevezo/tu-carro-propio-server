import React, { useState } from 'react'
import { Nav, NavbarContainer, NavLogo, Img, MobileIcon, NavMenu, NavItem, NavLinks } from './Navbar-elements';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import logo from '../../images/logo.png';

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <IconContext.Provider value={{ color: '#202020' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <Img src={logo} loading="lazy" alt='img' />
                        Tucarropropio
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/'>
                                Acerca de nosotros
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/'>
                                Agenda una cita
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/'>
                                Catálogo
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    )
}

export default Navbar;