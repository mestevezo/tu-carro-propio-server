import React from "react";
import { Navbar, Footer } from "../../components";
import PostsDetails from "../PostDetails/PostsDetails";
import GlobalStyle from "../../globalStyles";


function Details() {
    return (
        <>
            <Navbar />
            <PostsDetails />
            <GlobalStyle />
            <Footer />
        </>
    );
}

export default Details;