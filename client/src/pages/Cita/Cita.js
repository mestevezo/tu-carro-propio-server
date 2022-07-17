import React from "react";
import GlobalStyle from "../../globalStyles";
import { Navbar, Footer } from "../../components";
import Contact from "./Contact"
import CitaInformation from "./Cita-info";
import Whatsapp from "./Whatsapp-contact";


function Cita() {

    return (
        <>
            <GlobalStyle />
            <Navbar />
            <CitaInformation />
            <Whatsapp />
            <Contact />
            <Footer />
        </>
    );

};

export default Cita;