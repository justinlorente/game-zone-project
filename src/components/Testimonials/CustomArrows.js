import React from 'react';
import PropTypes from 'prop-types';

const CustomArrows = (props) => {
  const { onClick, direction, classes } = props;
  return (
    <div className={`custom-arrows ${classes}`}>
      <button className="text-sm" onClick={onClick}>
        <i className={direction} />
      </button>
    </div>
  );
};

CustomArrows.propTypes = {
  onClick: PropTypes.func,
  direction: PropTypes.string,
  classes: PropTypes.string,
};

CustomArrows.defaultProps = {
  onClick: () => {},
  direction: '',
  classes: '',
};

export default CustomArrows;
