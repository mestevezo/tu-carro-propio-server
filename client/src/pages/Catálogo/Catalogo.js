import React from "react";
import GlobalStyle from "../../globalStyles";
import { Navbar, Footer } from "../../components";
import CatalogoHome from "../Catálogo/Catalogo-home";
import Productfilter from "./Product-filter";

function Catalogo() {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Productfilter />
            <CatalogoHome />
            <Footer />
        </>
    );
}

export default Catalogo;