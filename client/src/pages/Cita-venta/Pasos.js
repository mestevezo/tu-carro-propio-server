import styled from "styled-components"
import { HiCheck } from "react-icons/hi";

const Pasos = () => {
  return (
    <> 
    <PasosTitle>Pasos para vender tu vehículo</PasosTitle>
    <Characteristics>
        <BlockInfo1>
         
          <br />
          <Description><HiCheck /> Trae tu carro limpio a nuestras instalaciones.</Description>
          <Description><HiCheck /> Le haremos un avalúo a tu vehículo (revisión mecánica y legal).</Description>
          <Description><HiCheck /> Debes ser el propietario del carro y al momento de la inspección debes tener la documentación en mano (título de propiedad y cédula).</Description>
          <Description><HiCheck /> Luego del avalúo, nuestro equipo especializado te dará un estimado del precio de tu carro pero tú tienes la última palabra, es decir, pones tu precio!</Description>
          <Description><HiCheck /> Tomaremos fotos y videos profesionales para darle una máxima exposición a tu vehículo.</Description>
          <Description><HiCheck /> El proceso de revisión y fotografía se realiza en un máximo de 20 minutos.</Description>
          <Description><HiCheck /> Somos un concesionario virtual, por lo que no tienes que dejarnos tu carro a consignación.</Description>
          <Description><HiCheck /> Te ofrecemos un lugar seguro donde hacer negocios.</Description>
          
        </BlockInfo1>

</Characteristics>
    </>
   
  )
}

const PasosTitle = styled.h1` 
  text-align: center;
  color: #202020;
  font-size: 50px;

  @media screen and (max-width: 780px) {
    font-size: 2rem;
  }

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
  }

`

const BlockInfo1 = styled.div`
  font-size: 1.5rem;
  text-align: center;
  white-space: pre-line;
  width: 100%;
  line-height: 2rem;

  @media screen and (max-width: 780px) {
    width: 100%;
  }

`

const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  text-align: left;
  color: #202020;
`

export default Pasos

