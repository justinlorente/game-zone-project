import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Person1 from '../../images/testimonials/person-1.jpg';
import Person2 from '../../images/testimonials/person-2.jpg';
import Person3 from '../../images/testimonials/person-3.jpg';
import CustomArrows from './CustomArrows';

const Testimonials = () => {
  const images = [{ src: Person1 }, { src: Person2 }, { src: Person3 }];

  const settings = {
    infinite: true,
    autoplay: true,
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    slidesToScroll: 1,
    customPaging: (i) => {
      return (
        <div className="my-5">
          <img className="rounded-md" src={images[i].src} alt="testimonial" />
        </div>
      );
    },
    prevArrow: (
      <CustomArrows
        classes="custom-arrow-left prev"
        direction="fal fa-arrow-left text-xs text-green-custom"
      />
    ),
    nextArrow: (
      <CustomArrows
        classes="custom-arrow-right next"
        direction="fal fa-arrow-right text-xs text-green-custom"
      />
    ),
  };

  return (
    <div className="testimonials">
      <span className="quote">“</span>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <p className="lg:px-12 leading-7 lg:leading-9">
              Reading the news articles on this site is awesome! You do know how
              to turn a regular story into a sensation. I appreciate the
              excellent customer service and super fast delivery service, thank
              you!
            </p>
            <div className="info">
              <h4 className="name">James Lee</h4>
              <span className="position">Designer</span>
            </div>
          </div>
          <div>
            <p className="lg:px-10 leading-7 lg:leading-9">
              What an exciting event for all gamers! Thanks for letting us stay
              ahead of the most important stuff and updates, and of course for
              proving quality items that we can’t live without. Great job you
              guys!
            </p>
            <div className="info">
              <h4 className="name">Anna Dawson</h4>
              <span className="position">Company Director</span>
            </div>
          </div>
          <div>
            <p className="lg:px-12 leading-6 lg:leading-9">
              Being an experienced user, it was super fun and interesting for me
              to explore your website. Very impressed with the selection of
              items and topics for discussion. I will recommend your products to
              all of my friends in this area!
            </p>
            <div className="info">
              <h4 className="name">Daniel Moore</h4>
              <span className="position">Senior manager</span>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
