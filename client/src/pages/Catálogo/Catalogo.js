import React from "react";
import GlobalStyle from "../../globalStyles";
import { Navbar, Footer } from "../../components";
import CatalogoHome from "../Catálogo/Catalogo-home";

function Catalogo() {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <CatalogoHome />
            <Footer />
        </>
    );
}

export default Catalogo;