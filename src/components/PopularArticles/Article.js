import { Link } from 'gatsby';
import React, { Fragment } from 'react';
import PostInfo from '../PostInfo';
import PropTypes from 'prop-types';

const Article = (props) => {
  const { text, date, likes, comments, colorText, urlPost } = props;

  return (
    <Fragment>
      <div className="pt-3">
        <Link to={urlPost}>
          <h6 className="title">{text}</h6>
        </Link>
      </div>
      <div className="pb-1 md:pb-2 pt-2 text-xs">
        <PostInfo
          date={date}
          likes={likes}
          comments={comments}
          colorText={colorText}
          urlPost={urlPost}
        />
      </div>
    </Fragment>
  );
};

Article.propTypes = {
  text: PropTypes.string,
  date: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.number,
  colorText: PropTypes.string,
  urlPost: PropTypes.string,
};

Article.defaultProps = {
  text: '',
  likes: 0,
  comments: 0,
  month: '',
  colorText: 'text-black',
  urlPost: '/',
};

export default Article;
