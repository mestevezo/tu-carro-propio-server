import React, { useState, useEffect, useCallback } from "react";
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButton";
import useEmblaCarousel from "embla-carousel-react";
import styled from 'styled-components';

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

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

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
                  <img
                    className="embla__slide__img"
                    src={mediaByIndex(index)}
                    alt="car"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </Embla>
  );
};

const Embla = styled.div`
  .embla {
    border-radius: 20px;
    position: relative;
    padding: 0px;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
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
    height: 300px;
  }
  
  .embla__slide__img {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    width: auto;
    min-height: 100%;
    min-width: 100%;
    max-width: none;
    transform: translate(-50%, -50%);
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
    padding-top: 10px;
  }
  
  .embla__dot {
    background-color: transparent;
    cursor: pointer;
    position: relative;
    padding: 0;
    outline: 0;
    border: 0;
    width: 30px;
    height: 30px;
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
`

export default EmblaCarousel;