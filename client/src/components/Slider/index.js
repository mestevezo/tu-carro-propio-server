import EmblaCarousel from "./EmblaCarousel";

const Slider = (Imgs) => {
  const slideCount = Imgs.Imgs.length;
  const slides = Array.from(Array(slideCount).keys());

  return (
    <>
      <EmblaCarousel slides={slides} Imgs={Imgs} />
    </>
  );
};

export default Slider;
