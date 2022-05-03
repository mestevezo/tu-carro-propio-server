import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import CatalogoHome from "../Catálogo/Catalogo-home";
import GlobalStyle from "../../globalStyles";
import Productfilter from "./Product-filter";
import { Footer } from "../../components";



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