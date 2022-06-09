import React from "react";
import EmblaCarousel from "./EmblaCarousel";



const Slider = (Imgs) => {

    const SLIDE_COUNT =Imgs.Imgs.length;
    const slides = Array.from(Array(SLIDE_COUNT).keys());

       return (
        <>
            <EmblaCarousel slides={slides} Imgs={Imgs} />
        </>
    )
};



export default Slider