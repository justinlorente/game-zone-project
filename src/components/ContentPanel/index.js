import React from 'react';
import PropTypes from 'prop-types';

const ContentPanel = (props) => {
  const { closeContent, children } = props;

  return (
    <div className="flex flex-col h-full touch-auto Content-panel-scroll w-[320px] z-50 bg-white pl-[30px] pr-[28px] relative">
      <button
        onClick={closeContent}
        className="fixed z-50 right-3 top-1 text-gray-500 text-[20px] duration-300 hover:-rotate-180 ease-in-out"
      >
        <i className="fal fa-times" />
      </button>
      {children}
    </div>
  );
};

ContentPanel.propTypes = {
  closeContent: PropTypes.func,
  children: PropTypes.node,
};

ContentPanel.defaultProps = {
  closeContent: () => {},
};

export default ContentPanel;
