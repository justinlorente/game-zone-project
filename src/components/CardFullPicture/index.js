import React, { useState, useEffect, useRef } from 'react';
import { navigate, Link } from 'gatsby';
import PropTypes from 'prop-types';
import noImageSvg from '../../images/no-image.svg';
import Tag from '../Tag';
import PostInfo from '../PostInfo';
import IconHover from '../IconHover';

const CardFullPicture = (props) => {
  const containerRef = useRef();
  const {
    id,
    url,
    category,
    srcImg,
    title,
    date,
    comments,
    likes,
    cardFull,
    dimensions,
    iconPlayVideo,
    classes,
  } = props;
  const tagVariant = category.variant || 'green';
  const [imageSource, setImageSource] = useState('');
  const [isHover, setIsHover] = useState(false);

  const renderChangeClass = () => {
    if (cardFull) return 'card-full';

    return 'card-mini';
  };

  useEffect(() => {
    import(`../../images/${srcImg}`)
      .then((image) => {
        setImageSource(image?.default || '');
      })
      .catch(() => setImageSource(''));
  }, [srcImg]);

  const handleClick = (e) => {
    e.preventDefault();
    if (!containerRef.current || containerRef.current !== e.target) return;
    navigate(url);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      navigate(url);
    }
  };

  const handleHover = (e) => {
    const hoverValue = containerRef.current === e.target;
    setIsHover(hoverValue);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  const clickRedirectIconPlayVideo = () => navigate(url);

  const renderPostInfoCardMini = () => {
    if (cardFull)
      return (
        <PostInfo
          date={date}
          comments={comments}
          likes={likes}
          urlPost={url}
          colorText="text-gray-300"
        />
      );

    return (
      <div className="CardFullPicture-post-info">
        <Link to={url} className="date">
          <span className="date-text">{date}</span>
        </Link>
        <Link to={url} className="comments">
          <i className="fal fa-comment-alt comments-icon" />
          <span className="comments-text">{comments}</span>
        </Link>
        <button className="likes">
          <i className="fal fa-heart likes-icon" />
          <span className="likes-text">{likes}</span>
        </button>
      </div>
    );
  };

  const renderIconPlayVideo = () => {
    if (!iconPlayVideo) return;

    return <IconHover type="video" onClick={clickRedirectIconPlayVideo} />;
  };

  return (
    <div
      ref={containerRef}
      key={id}
      tabIndex="-1"
      role="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`CardFullPicture ${
        classes || ''
      } relative bg-shadow shadow-inner-bottom ${dimensions} ${
        isHover ? 'CardFullPicture-hover' : ''
      }`}
      style={{ backgroundImage: `url("${imageSource}")` }}
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
    >
      {renderIconPlayVideo()}
      <div className={`z-10 w-full ${renderChangeClass()}`}>
        <Tag colorTag={tagVariant}>
          <Link to={category.url || '/'}>{category.label}</Link>
        </Tag>
        <h4
          className={`CardFullPicture-title ${
            cardFull ? 'size-full' : 'size-mini'
          }`}
        >
          {title}
        </h4>
        {renderPostInfoCardMini()}
      </div>
    </div>
  );
};

CardFullPicture.propTypes = {
  imageSrc: PropTypes.string,
  category: PropTypes.shape({
    label: PropTypes.string,
    variant: PropTypes.oneOf(['orange', 'green', 'yellow']),
  }),
  title: PropTypes.string,
  date: PropTypes.string,
  comments: PropTypes.number,
  likes: PropTypes.number,
  dimensions: PropTypes.string,
  classes: PropTypes.string,
  cardFull: PropTypes.bool,
  iconPlayVideo: PropTypes.bool,
};

CardFullPicture.defaultProps = {
  imageSrc: noImageSvg,
  category: {
    label: 'Unknown',
    variant: 'red',
    url: '/',
  },
  title: '',
  date: '',
  comments: 0,
  likes: 0,
  dimensions: '',
  url: '/',
};

export default CardFullPicture;
