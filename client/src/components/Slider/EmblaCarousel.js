import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButton";
import useEmblaCarousel from "embla-carousel-react";
import styled from 'styled-components';
//import ReactImageMagnify from 'react-image-magnify';
import ReactImageMagnify from '../ReactImageMagnify/ReactImageMagnify';
import { Thumb } from "./EmblaCarouselButton";

const EmblaCarousel = ({ slides, Imgs }) => {

  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const media = Imgs.Imgs;

  const mediaByIndex = index => media[index % media.length];

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ]);
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    selectedClass: "",
    dragFree: true
  });

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);

  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <Embla>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                  <ReactImageMagnify className="embla__slide__img"
                    {...{
                      smallImage: {

                        isFluidWidth: true,
                        src: mediaByIndex(index),
                        width: 100,
                        height: 110

                      },
                      largeImage: {
                        src: mediaByIndex(index),
                        width: 1500,
                        height: 2000,

                      },
                      lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
                      enlargedImagePosition: "over"
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>

      <div className="embla embla--thumb">
        <div className="embla__viewport" ref={thumbViewportRef}>
          <div className="embla__container embla__container--thumb">
            {slides.map((index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imgSrc={mediaByIndex(index)}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>






    </Embla>
  );
};


const Embla = styled.div`
  .embla {
    border-radius: 20px;
    position: relative;
    padding: 0px;
    max-width: 100%;
    margin-left: 20%;
    margin-right: auto;
    margin-top: 2%;

    @media screen and (max-width: 960px) {
    margin-left: auto;
    margin-right: auto;
    width: 50vh;
}
  }
  
  .embla__viewport {
    border-radius: 20px;
    overflow: hidden;
  }
  
  .embla__viewport.is-draggable {
    cursor: move;
    cursor: grab;
  }
  
  .embla__viewport.is-dragging {
    cursor: grabbing;
  }
  
  .embla__container {
    display: flex;
    margin-left: -10px;
  }
  
  .embla__slide {
    position: relative;
    min-width: 100%;
    padding-left: 10px;
  }
  
  .embla__slide__inner {
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    height: 600px;
    width: 600px;
  

    @media screen and (max-width: 960px) {
    height: 350px;
    width: 50vh;
}
  }
  
  .embla__slide__img {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
  }
  
  .embla__button {
    outline: 0;
    cursor: pointer;
    background-color: transparent;
    touch-action: manipulation;
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    border: 0;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    fill: #f7df1e;
    padding: 0;
  }
  
  .embla__button:disabled {
    cursor: default;
    opacity: 0.3;
  }
  
  .embla__button__svg {
    width: 100%;
    height: 100%;
  }
  
  .embla__button--prev {
    left: 27px;
  }
  
  .embla__button--next {
    right: 27px;
  }
  
  .embla__dots {
    display: flex;
    list-style: none;
    justify-content: center;
    padding-top: 0px;
  }
  
  .embla__dot {
    background-color: transparent;
    cursor: pointer;
    position: relative;
    padding: 0;
    outline: 0;
    border: 0;
    width: 100px;
    height: 100px;
    margin-right: 7.5px;
    margin-left: 7.5px;
    display: flex;
    align-items: center;
  }
  
  .embla__dot:after {
    background-color: #efefef;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    content: "";
  }
  
  .embla__dot.is-selected:after {
    background-color: #202020;
    opacity: 1;
  }


  .embla--thumb {
    cursor: grab;
    padding-top: 20px;
    margin-top: -12px;
  }
  
  .embla__container--thumb {
    cursor: grab;
  }
  
  .embla__slide--thumb {
    padding-left: 20px;
    min-width: 18%;

    @media screen and (max-width: 960px) {
    min-width: 20%;
}

  }
  
  .embla__slide__inner--thumb {
    touch-action: manipulation;
    cursor: grab;
    border: 0;
    outline: 0;
    margin: 0;
    padding: 0;
    height: 60px;
    width: 60px;
    position: relative;
    align-self: center;
    display: block;
    overflow: hidden;
  }
  
  .embla__slide__thumbnail {
    position: absolute;
    opacity: 0.6;
    top: 0;
    bottom: 0;
    left: -10000%;
    right: -10000%;
    margin: auto;
    min-width: 1000%;
    min-height: 1000%;
    max-width: none;
    transform: scale(0.1);
    transition: opacity 0.2s;
  }
  
  .embla__slide--thumb.is-selected .embla__slide__thumbnail {
    opacity: 1;
  }
  

`




export default EmblaCarousel;