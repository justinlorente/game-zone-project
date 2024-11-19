import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const GamesCard = (props) => {
  const { id, url, title, srcImg, date, position } = props;
  const [imageSource, setImageSource] = useState('');

  useEffect(() => {
    import(`../../images/top-games/${srcImg}`)
      .then((image) => {
        setImageSource(image?.default || '');
      })
      .catch(() => setImageSource(''));
  }, [srcImg]);

  return (
    <article className="games-card">
      <div className="mr-3 relative">
        <span className="position">{position}</span>
        <Link to={url}>
          <img
            className="w-16 h-16 object-cover rounded-md"
            src={imageSource}
            alt={title}
          />
        </Link>
      </div>
      <div>
        <Link to={url}>
          <h6 className="title">{title}</h6>
        </Link>
        <Link to={url}>
          <span className="date">{date}</span>
        </Link>
      </div>
    </article>
  );
};

GamesCard.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  srcImg: PropTypes.string,
  date: PropTypes.string,
  position: PropTypes.string,
};

GamesCard.defaultProps = {
  id: '',
  url: '',
  title: '',
  title: '',
  srcImg: '',
  date: '',
  position: '',
};

export default GamesCard;
