import React from "react";
import EmblaCarousel from "./EmblaCarousel";


const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());


const Slider = (Imgs) => {
    return (
        <>
            <EmblaCarousel slides={slides} Imgs={Imgs} />
        </>
    )
};



export default Slider