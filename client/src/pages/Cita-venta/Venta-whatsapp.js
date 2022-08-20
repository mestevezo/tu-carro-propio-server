import React from 'react'
import { SiWhatsapp } from 'react-icons/si'
import styled from 'styled-components'


function VentaWhatsapp() {
    return (
        <>
            <FullLayout>
                <WhatsappContactLayout>
                    <h1>Contáctanos vía whatsapp</h1>
                    <p>Pulsa sobre el logo de whatsapp y serás redirigido a nuestro chat.</p>.
                </WhatsappContactLayout>
                <WhatsappIconLink href="https://api.whatsapp.com/send?phone=4140120467&text=Buenas,%20quisiera%20agendar%20una%20cita" target="_blank" aria-label="Whatsapp">
                    <SiWhatsapp />
                </WhatsappIconLink>

            </FullLayout>
            <FormText>
                <h1>Otra opción es llenar este formulario que será enviado a nuestro correo</h1>
            </FormText>
        </>
    )
}

const FullLayout = styled.div`
margin-top: 1%;
    display: flex;
`

const WhatsappContactLayout = styled.div`
    width: 70%;
    color: #202020;
    h1 {
        font-size: 50px;
        margin-top: 3%;
        margin-left: 10%;
        text-align: left;

        @media screen and (max-width: 780px) {
        margin-top: 18%;
        font-size: 2rem;
        line-height: 100%;
        margin-bottom: 5%;
  }
    }
    p { 
        font-size: 22px;
        margin-left: 10%;
        text-align: left;

        @media screen and (max-width: 780px) {
    font-size: 1rem;
    margin-top: 5%;
    line-height: 100%;
  }
    }
    `

const WhatsappIconLink = styled.a` 
    padding-top: 2%;
    color: #202020;
    font-size: 120px;
    margin-left: 8%;

    @media screen and (max-width: 780px) {
    padding-top: 20%;
    display: flexbox;
    font-size: 65px;
    margin-bottom: 10%;
    
  }

&:hover {
    color: #f7df1e;
    transform: scale(1.03);
    transition: 0.3s ease-out;
 }
`
const FormText = styled.div`
    color: #202020;
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
    text-align: center;
    font-size: 22px;

    @media screen and (max-width: 780px) {
    font-size: 14px;
  }
`


export default VentaWhatsapp