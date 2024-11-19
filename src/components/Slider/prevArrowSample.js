import React from 'react';
import PropTypes from 'prop-types';

const prevArrowSample = (props) => {
  const { onClick, direction, classes } = props;
  return (
    <div className={`custom-arrows ${classes}`}>
      <button className="button" onClick={onClick}>
        <i className={direction} />
      </button>
    </div>
  );
};

prevArrowSample.propTypes = {
  onClick: PropTypes.func,
  direction: PropTypes.string,
  classes: PropTypes.string,
};

prevArrowSample.defaultProps = {
  onClick: () => {},
  direction: '',
  classes: '',
};

export default prevArrowSample;
