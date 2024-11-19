import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const ProductCart = (props) => {
  const { url, title, srcImg, lowestPrice, highestPrice } = props;

  const [imageSource, setImageSource] = useState('');

  useEffect(() => {
    import(`../../images/products/${srcImg}`)
      .then((image) => {
        setImageSource(image?.default || '');
      })
      .catch(() => setImageSource(''));
  }, [srcImg]);

  return (
    <div className="Product-card">
      <Link to={url}>
        <img className="image" src={imageSource} alt={title} />
      </Link>
      <Link className="select" to={url}>
        <i className="fal fa-shopping-bag pr-2 pt-4 md:text-[12px]" />
        <span className="uppercase options"> select options </span>
      </Link>
      <div className="py-5">
        <h2 className="text-purple font-roboto font-medium pb-1 text-[13px] lg:text-sm">
          {title}
        </h2>
        <p className="prices">
          ${lowestPrice} — ${highestPrice}
        </p>
      </div>
    </div>
  );
};

ProductCart.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  srcImg: PropTypes.string,
  lowestPrice: PropTypes.string,
  highestPrice: PropTypes.string,
};

ProductCart.defaultProps = {
  url: '',
  title: '',
  srcImg: '',
  lowestPrice: '',
  highestPrice: '',
};

export default ProductCart;
