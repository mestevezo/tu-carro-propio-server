import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import GlobalStyle from "../../globalStyles";


const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());


const Slider = (Imgs) => {
    return (
        <>
            <GlobalStyle></GlobalStyle>
            <EmblaCarousel slides={slides} Imgs={Imgs} />
        </>
    )
};



export default Slider