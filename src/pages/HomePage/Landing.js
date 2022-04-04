import React from "react";
import GlobalStyle from "../../globalStyles";
import { Navbar, Footer, Services } from "../../components";
import Home from "./Home";

function Landing() {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Home />
            <Services />
            <Footer />
        </>
    );
}

export default Landing;