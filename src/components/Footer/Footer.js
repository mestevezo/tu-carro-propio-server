import React from 'react';
import { FooterContainer, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, SocialMedia, SocialMediaWrap, WebsiteRights, SocialIcons, SocialIconLink } from './Footer-elements'
import { SiGmail, SiWhatsapp, SiInstagram, SiTiktok, SiGooglemaps } from 'react-icons/si'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Contáctanos</FooterLinkTitle>
                            <SocialIcons>
                                <SocialIconLink href="https://api.whatsapp.com/send?phone=4140120467&text=Buenas,%20quisiera%20agendar%20una%20cita." target="_blank" aria-label="Whatsapp">
                                    <SiWhatsapp></SiWhatsapp>
                                </SocialIconLink>
                                <SocialIconLink href="https://mail.google.com/mail/?view=cm&fs=1&to=tucarropropiove@gmail.com&su=Asunto&body=" target="_blank" aria-label="Gmail">
                                    <SiGmail></SiGmail>
                                </SocialIconLink>
                            </SocialIcons>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Síguenos</FooterLinkTitle>
                            <SocialIcons>
                                <SocialIconLink href="https://www.instagram.com/tucarropropio/?hl=es" target="_blank" aria-label="Instagram">
                                    <SiInstagram></SiInstagram>
                                </SocialIconLink>
                                <SocialIconLink href="https://www.tiktok.com/@tucarropropio?lang=es" target="_blank" aria-label="Tiktok">
                                    <SiTiktok></SiTiktok>
                                </SocialIconLink>
                            </SocialIcons>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Ubícanos</FooterLinkTitle>
                            <SocialIcons>
                                <SocialIconLink href="https://www.google.com/maps/place/Tucarropropio/@10.4799863,-66.8596808,17z/data=!4m5!3m4!1s0x8c2a59941ef561e3:0x35ac16d11c66514d!8m2!3d10.4797433!4d-66.8549886?hl=es" target="_blank" aria-label="Google maps">
                                    <SiGooglemaps></SiGooglemaps>
                                </SocialIconLink>
                            </SocialIcons>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <WebsiteRights>TU CARRO PROPIO - 2022</WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterContainer>
        </>
    )
}

export default Footer;