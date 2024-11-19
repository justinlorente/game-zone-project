import React from 'react';
import { Link } from 'gatsby';
import PostInfo from '../PostInfo';
import noImageSvg from '../../images/no-image.svg';
import PropTypes from 'prop-types';
import ImageWithTag from '../ImageWithTag';

const Card = (props) => {
  const {
    imgSrc,
    title,
    date,
    comments,
    likes,
    colorTag,
    isVideo,
    withOpacity,
    tagContent,
    urlCard,
    classes,
    classesImg,
    classesTitle,
    classesTag,
    classesPostInfo,
  } = props;

  const renderClasses = () => {
    if (!classesTitle) return 'title-texture text-purple';

    return classesTitle;
  };

  return (
    <div className={`Card w-full ${classes}`}>
      <ImageWithTag
        altImg={title}
        srcImage={imgSrc}
        colorTag={colorTag}
        classes={classesImg}
        isVideo={isVideo}
        url={'/'}
        urlTag={'/'}
        withOpacity={withOpacity}
        contentTag={tagContent}
        classesTag={classesTag}
      />
      <div className="w-full info">
        <Link to={urlCard}>
          <h5 className={`Card-title ${renderClasses()}`}>{title}</h5>
        </Link>
        <PostInfo
          date={date}
          comments={comments}
          likes={likes}
          colorText="text-gray-400"
          urlPost={urlCard}
          classes={classesPostInfo}
        />
      </div>
    </div>
  );
};

Card.defaultProps = {
  imgSrc: noImageSvg,
  colorTag: 'yellow',
  classes: '',
  isVideo: false,
  tagContent: <React.Fragment />,
  urlCard: '/',
  classesPostInfo: '',
};

Card.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  comments: PropTypes.number,
  likes: PropTypes.number,
  colorTag: PropTypes.string,
  isVideo: PropTypes.bool,
  withOpacity: PropTypes.bool,
  tagContent: PropTypes.node,
  urlCard: PropTypes.string,
  classesPostInfo: PropTypes.string,
};

export default Card;
