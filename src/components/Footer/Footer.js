import React from 'react';
import { FooterContainer, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './Footer-elements'
import { NavLogo, Img } from '../Navbar/Navbar-elements';
import logo from '../../images/logo.png';
import { FaWhatsapp, FaGoogle, FaInstagram, FaTiktok, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Contáctanos</FooterLinkTitle>
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="Whatsapp">
                                    <FaWhatsapp></FaWhatsapp>
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Gmail">
                                    <FaGoogle></FaGoogle>
                                </SocialIconLink>
                            </SocialIcons>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Síguenos</FooterLinkTitle>
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                    <FaInstagram></FaInstagram>
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Tiktok">
                                    <FaTiktok></FaTiktok>
                                </SocialIconLink>
                            </SocialIcons>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Ubícanos</FooterLinkTitle>
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="Google maps">
                                    <FaMapMarkerAlt></FaMapMarkerAlt>
                                </SocialIconLink>
                            </SocialIcons>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <WebsiteRights>TUCARROPROPIO 2022</WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterContainer>
        </>
    )
}

export default Footer;