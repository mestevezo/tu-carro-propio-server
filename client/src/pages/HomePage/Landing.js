import React from "react";
import GlobalStyle from "../../globalStyles";
import { Navbar, Footer } from "../../components";
import Home from "./Home";


function Landing() {

    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Home />
            <Footer />
        </>
    );
    
};

export default Landing;