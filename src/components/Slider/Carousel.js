import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Carousel = (props) => {
  const { srcImg } = props;
  const [imageSource, setImageSource] = useState('');

  useEffect(() => {
    import(`../../images/${srcImg}`)
      .then((image) => {
        setImageSource(image?.default || '');
      })
      .catch(() => setImageSource(''));
  }, [srcImg]);

  return (
    <div className="relative">
      <img
        className="rounded-lg w-full h-full relative object-cover"
        src={imageSource}
        alt="Carousel image"
      />
    </div>
  );
};

Carousel.propTypes = {
  srcImg: PropTypes.string,
};

Carousel.defaultProps = {
  srcImg: '',
};

export default Carousel;
