import React from "react";
import GlobalStyle from "../../globalStyles";
import { Navbar, Footer } from "../../components";
import NosotrosInfo from "./Nosotros-info";




function Nosotros() {

    return (
        <>
            <GlobalStyle />
            <Navbar />
            <NosotrosInfo />
            <Footer />

        </>
    );

};

export default Nosotros;