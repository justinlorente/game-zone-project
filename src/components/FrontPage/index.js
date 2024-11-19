import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import noImageSvg from '../../images/no-image.svg';

const FrontPage = (props) => {
  const { srcImg, title, redirectTitle, redirectUrl, classes } = props;

  return (
    <div
      className={`Front-page ${classes || ''}`}
      style={{ backgroundImage: `url("${srcImg}")` }}
    >
      <h2 className="Front-page-title">{title}</h2>
      <div className="Front-page-subtitle">
        <Link to={redirectUrl}>{redirectTitle}</Link>
        <span className="px-2 !text-[4px] text-green-custom select-none">
          <i className="fas fa-circle" />
        </span>
        <span>{title}</span>
      </div>
    </div>
  );
};

FrontPage.propTypes = {
  srcImg: PropTypes.string,
  title: PropTypes.string,
  redirectTitle: PropTypes.string,
  redirectUrl: PropTypes.string,
  classes: PropTypes.string,
};

FrontPage.defaultProps = {
  srcImg: noImageSvg,
  title: '',
  redirectTitle: '',
  redirectUrl: '',
  classes: '',
};

export default FrontPage;
