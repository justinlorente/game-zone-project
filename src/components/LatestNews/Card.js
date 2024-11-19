import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import ImageWithTag from '../ImageWithTag';
import PostInfo from '../PostInfo';
import PropTypes from 'prop-types';
import noImageSvg from '../../images/no-image.svg';

const Card = (props) => {
  const {
    title,
    imgSrc,
    colorTag,
    classesImg,
    isVideo,
    url,
    withOpacity,
    tagContent,
    classesTag,
    infoPost,
    text,
    classesInfo,
  } = props;
  const [imageSource, setImageSource] = useState('');
  useEffect(() => {
    import(`../../images/latest-news/${imgSrc}`)
      .then((image) => {
        setImageSource(image?.default || '');
      })
      .catch(() => setImageSource(''));
  }, [imgSrc]);
  return (
    <div className="Card">
      <div className={`${classesImg} Card-img`}>
        <ImageWithTag
          altImg={title}
          srcImage={imageSource}
          colorTag={colorTag}
          classes={'h-full'}
          isVideo={isVideo}
          url={url}
          withOpacity={withOpacity}
          contentTag={tagContent}
          classesTag={classesTag}
        />
      </div>
      <div className={`${classesInfo} Card-info`}>
        <Link to={url}>
          <h5 className="Card-info-title">{title}</h5>
        </Link>
        <p className="Card-info-text">{text}</p>
        <PostInfo
          date={infoPost.date}
          comments={infoPost.comments}
          likes={infoPost.likes}
          colorText={'text-gray-400'}
          urlPost={url}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  colorTag: PropTypes.string,
  classesImg: PropTypes.string,
  isVideo: PropTypes.bool,
  url: PropTypes.string,
  withOpacity: PropTypes.bool,
  tagContent: PropTypes.node,
  classesTag: PropTypes.string,
  infoPost: PropTypes.shape({
    date: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.number,
  }),
  text: PropTypes.string,
  classesInfo: PropTypes.string,
};

Card.defaultProps = {
  title: '',
  imgSrc: noImageSvg,
  colorTag: 'green',
  classesImg: '',
  url: '/',
  classesTag: '',
  infoPost: '',
  text: '',
  classesInfo: '',
  infoPost: {
    date: '0.0.0',
    likes: 0,
    comments: 0,
  },
};

export default Card;
