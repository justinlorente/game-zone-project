import React from 'react';
import PropTypes from 'prop-types';

const PanelRightTabs = (props) => {
  const { children, onClick, disableHover, descriptionTabText } = props;

  return (
    <div className="flex relative">
      <button
        onClick={onClick}
        data-after-content={descriptionTabText}
        className={`tab tab-after after:content-[attr(data-after-content)] pr-[15px] ${
          disableHover ? '' : 'hover:-translate-x-2'
        }`}
      >
        {children}
      </button>
    </div>
  );
};

PanelRightTabs.propTypes = {
  onClick: PropTypes.func,
  disableHover: PropTypes.bool,
  descriptionTabText: PropTypes.string,
  children: PropTypes.node,
};

PanelRightTabs.defaultProps = {
  onClick: () => {},
  disableHover: false,
  descriptionTabText: '',
};

export default PanelRightTabs;
