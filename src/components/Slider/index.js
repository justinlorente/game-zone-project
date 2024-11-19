import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderData from '../../data/SliderCarouselData.json';
import Carousel from './Carousel';
import CarouselArrow from './prevArrowSample';

const Sliders = () => {
  const renderCarousel = () => {
    return SliderData.map((e) => {
      return <Carousel srcImg={e.image} key={e.id} />;
    });
  };

  const settings = {
    infinite: true,
    autoplay: true,
    prevArrow: (
      <CarouselArrow
        classes="transition translate-x-[-3rem] prev"
        direction="fal fa-arrow-left"
      />
    ),
    nextArrow: (
      <CarouselArrow
        classes="transition translate-x-[3rem] right-3 next"
        direction="fal fa-arrow-right"
      />
    ),
  };

  return (
    <div className="Sliders">
      <h2 className="font-roboto text-purple font-semibold text-3xl p-3">
        Slider
      </h2>
      <div className="carousel rounded-lg">
        <Slider {...settings}>{renderCarousel()}</Slider>
      </div>
    </div>
  );
};

export default Sliders;
