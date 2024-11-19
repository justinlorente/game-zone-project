import { Link } from 'gatsby';
import React from 'react';
import Tag from '../Tag';
import IconHover from '../IconHover';
import PropTypes from 'prop-types';

const ImageWithTag = (props) => {
  const {
    srcImage,
    colorTag,
    classes,
    url,
    withOpacity,
    contentTag,
    isVideo,
    altImg,
    classesTag,
  } = props;

  const renderIconVideoOrLink = () => {
    if (isVideo) {
      return <IconHover type={'video'} />;
    }
    return <IconHover type={'chain'} />;
  };

  const addOpacity = () => {
    if (withOpacity) return 'hover-opacity';
    return '';
  };

  const renderTag = () => {
    if (!contentTag) return;

    return (
      <div className={`absolute left-[-5px] z-0 ${classesTag}`}>
        <Tag colorTag={colorTag}>{contentTag}</Tag>
      </div>
    );
  };

  return (
    <div
      className={`ImageWithTag relative overflow-hidden rounded-md ${classes} ${addOpacity()}`}
    >
      <Link className="ImageWithTag-image" to={url}>
        <img
          className="h-full w-full object-cover"
          src={srcImage}
          alt={altImg}
        />
        {renderIconVideoOrLink()}
      </Link>
      {renderTag()}
    </div>
  );
};

ImageWithTag.defaultProps = {
  classes: '',
  url: '/',
  altImg: 'image',
};

ImageWithTag.propTypes = {
  classes: PropTypes.string,
  url: PropTypes.string,
  withOpacity: PropTypes.bool,
  altImg: PropTypes.string,
  srcImage: PropTypes.string,
  colorTag: PropTypes.string,
  contentTag: PropTypes.node,
  isVideo: PropTypes.bool,
};

export default ImageWithTag;
