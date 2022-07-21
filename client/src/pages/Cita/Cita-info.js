import React from 'react'
import styled from 'styled-components'
import background from '../../images/contact-background.jpg'

function CitaInformation() {
    return (
        <>
            <ImageTextLayout>
                <TopImageBackground src={background} alt='' loading='lazy' />
                <InformationLayout>
                    <h1>¿Cómo agendar una cita con nosotros?</h1>
                    <p> Agendar una cita es muy sencillo, tan sólo contáctanos vía whatsapp o email
                        para pautar la fecha de inspección del vehículo de tu interés.</p>
                </InformationLayout>
            </ImageTextLayout>
        </>
    )
}

const ImageTextLayout = styled.div`
    width: 100%;
    display: inline-block;
`

const TopImageBackground = styled.img`
    height: 40vh;
    width: 100%;
    opacity: 0.3;
    object-fit: cover;
    position: absolute;
    -webkit-mask:linear-gradient(#fff,transparent);
          mask:linear-gradient(#fff,transparent);

`

const InformationLayout = styled.div`
    text-align: center;
    position: relative;
    color: #202020;

    h1 {
        font-size: 50px;
        margin-top: 15%;
        margin-left: 5%;
        margin-right: 5%;
        
    @media screen and (max-width: 780px) {
    font-size: 2rem;
    line-height: 100%;
  }
    }
    p {
        font-size: 20px;
        margin-left: 15%;
        margin-right: 15%;
        margin-bottom: 5%;

    @media screen and (max-width: 780px) {
    font-size: 1rem;
    margin-top: 7%;
    margin-left: 5%;
    margin-right: 5%;
    line-height: 100%;
  }
    }
`

export default CitaInformation