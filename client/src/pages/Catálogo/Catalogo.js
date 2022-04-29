import React from "react";
import { Navbar } from "../../components";
import CatalogoHome from "../Catálogo/Catalogo-home";
import GlobalStyle from "../../globalStyles";
import Productfilter from "./Product-filter";


function Catalogo() {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Productfilter />
            <CatalogoHome />
        </>
    );
}

export default Catalogo;