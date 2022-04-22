import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './Services-elements'
import Icon1 from '../../images/Icon1.png';
import Icon2 from '../../images/Icon2.png';
import Icon3 from '../../images/Icon3.png';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>¿Cómo comprar un auto en 3 simples pasos?</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Revisa nuestro catálogo</ServicesH2>
                    <ServicesP>Te proporcionamos una gran variedad de autos.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Pauta la fecha para la inspección</ServicesH2>
                    <ServicesP>Realiza la inspección del vehículo en nuestra sede.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Concreta la compra</ServicesH2>
                    <ServicesP>Realiza el papeleo para que obtengas tu nuevo vehículo.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services