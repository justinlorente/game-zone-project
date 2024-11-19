import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const PostInfo = (props) => {
  const { date, comments, likes, colorText, urlPost, classes } = props;

  const changeClassesDate = () => {
    if (!classes) return 'Post-info';

    return classes;
  };

  return (
    <div className={`${changeClassesDate()} ${colorText}`}>
      <Link to={urlPost} className="Post-info-date">
        <span className="Post-info-date-text">{date}</span>
      </Link>
      <Link to={urlPost} className="Post-info-comments">
        <i className="fal fa-comment-alt Post-info-comments-icon" />
        <span className="Post-info-comments-text">{comments}</span>
      </Link>
      <button className="Post-info-likes">
        <i className="fal fa-heart Post-info-likes-icon" />
        <span className="Post-info-likes-text">{likes}</span>
      </button>
    </div>
  );
};

PostInfo.defaultProps = {
  colorText: 'text-white',
  urlPost: '/',
};

PostInfo.propTypes = {
  date: PropTypes.string,
  comments: PropTypes.number,
  likes: PropTypes.number,
  colorText: PropTypes.string,
  urlPost: PropTypes.string,
  classes: PropTypes.string,
};

export default PostInfo;
