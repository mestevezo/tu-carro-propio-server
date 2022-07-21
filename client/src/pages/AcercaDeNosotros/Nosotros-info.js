import React from 'react'
import styled from 'styled-components'
import { TiMessage, TiBusinessCard, TiArrowMoveOutline, TiCreditCard, TiFolderOpen, TiZoom } from "react-icons/ti";

function NosotrosInfo() {
    return (
        <>
            <InformationLayout>
                <h1>TUCARROPROPIO</h1>
                <p> Somos un concesionario de compra y venta de vehículos ubicado en las Mercedes, Caracas
                    con las mejores opciones del mercado, además te brindamos una asesoría personalizada,
                    bien sea para adquirir o vender tu auto.</p>
            </InformationLayout>
            <br />
            <AboutTitle>
                <h2>¿Por qué escogernos?</h2>
            </AboutTitle>

            <Characteristics>

                <BlockInfo1>
                    <AboutLogo>
                        <TiMessage />
                    </AboutLogo>
                    <br />
                    <Description>Te asesoramos durante todo el proceso de tu compra o venta</Description>
                </BlockInfo1>

                <br />

                <BlockInfo2>
                    <AboutLogo>
                        <TiBusinessCard />
                    </AboutLogo>
                    <br />
                    <Description>Nos encargamos de todo el papeleo pertinente del auto</Description>

                </BlockInfo2>

                <br />

                <BlockInfo3>
                    <AboutLogo>
                        <TiArrowMoveOutline />
                    </AboutLogo>
                    <br />
                    <Description>Contamos con espacio dedicado para la inspección del auto y
                        formalización de la transacción </Description>
                </BlockInfo3>
            </Characteristics>
            <Characteristics>
                <BlockInfo1>
                    <AboutLogo>
                        <TiCreditCard />
                    </AboutLogo>
                    <br />
                    <Description>Manejamos distintos métodos de pago</Description>
                </BlockInfo1>

                <br />

                <BlockInfo2>
                    <AboutLogo>
                        <TiFolderOpen />
                    </AboutLogo>
                    <br />
                    <Description>Revisa nuestro extenso catálogo con los detalles de cada vehículo</Description>

                </BlockInfo2>

                <br />

                <BlockInfo3>
                    <AboutLogo>
                        <TiZoom />
                    </AboutLogo>
                    <br />
                    <Description>Te aseguramos una inspección completa del vehículo en nuestra sede</Description>
                </BlockInfo3>
            </Characteristics>
            <br />
        </>
    )
}



const InformationLayout = styled.div`
    text-align: center;
    position: relative;
    background-color: #202020;

    h1 {
        color: #f7df1e;
        font-size: 60px;
        padding-top: 5%;
        margin-left: 5%;
        margin-right: 5%;
        margin-bottom: 2%;
        
    @media screen and (max-width: 780px) {
    font-size: 2rem;
    line-height: 100%;
  }
    }
    p {
        color: #fff;
        font-size: 20px;
        margin-left: 15%;
        margin-right: 15%;
        padding-bottom: 5%;

    @media screen and (max-width: 780px) {
    font-size: 0.8rem;
    margin-top: 7%;
    margin-left: 5%;
    margin-right: 5%;
    line-height: 100%;
  }
    }
`

const AboutTitle = styled.h2`
    margin-top: 5%;
    text-align: center;
    font: 80px;
    color: #202020;
`

const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  text-align: center;
`

const Characteristics = styled.div`
  display: flex;
  gap: 2%;
  margin-left: 20%;
  margin-right: 20%;
  padding: 20px;
  margin: 20px;
  width: 98%;


  @media screen and (max-width: 780px) {
    text-align: center;
    width: 90%;
    display: grid;
    height: 100%;
    margin-bottom: 20%;
  }`

const BlockInfo1 = styled.div`
text-align: center;
white-space: pre-line;
width: 30%;

@media screen and (max-width: 780px) {
  width: 100%;
}

`
const BlockInfo2 = styled.div`
text-align: center;
white-space: pre-line;
width: 30%;

@media screen and (max-width: 780px) {
  width: 100%;
}

`
const BlockInfo3 = styled.div`
text-align: center;
white-space: pre-line;
width: 30%;


@media screen and (max-width: 780px) {
  width: 100%;
}`

const AboutLogo = styled.a`
    font-size: 50px;
    color: #202020;
`

export default NosotrosInfo