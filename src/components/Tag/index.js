import React from 'react';
import PropTypes from 'prop-types';

const Tag = (props) => {
  const { children, colorTag, classes } = props;
  return (
    <div
      className={`inline-block w-auto pl-[1px] uppercase text-[11px] ${classes}`}
    >
      <div className={`CardTag ${colorTag}`}>{children}</div>
    </div>
  );
};

Tag.propTypes = {
  children: PropTypes.node,
  colorTag: PropTypes.oneOf(['green', 'orange', 'yellow']),
  classes: PropTypes.string,
};

Tag.defaultProps = {
  colorTag: 'green',
  classes: '',
};

export default Tag;
