import React from 'react'
import GlobalStyle from "../../globalStyles";
import { Navbar, Footer } from "../../components";
import Contact from "../Cita/Contact"
import CitaInformation from "../Cita/Cita-info";
import VentaWhatsapp from './Venta-whatsapp';
import Pasos from './Pasos';

const Venta = () => {
  return (
    <>
            <GlobalStyle />
            <Navbar />
            <CitaInformation />
            <Pasos />
            <VentaWhatsapp />
            <Contact />
            <Footer />
    </>
  )
}

export default Venta