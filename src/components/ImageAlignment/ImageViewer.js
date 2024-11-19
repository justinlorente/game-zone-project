import React, { useState } from 'react';

import PropTypes from 'prop-types';

const ImageViewer = (props) => {
  const [open, setOpen] = useState(false);
  const { src, classes } = props;

  const toggleViewer = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div>
      <div className={`Image-viewer ${classes} `}>
        <img className="static-image" src={src} alt="The witcher 2" />
        <div
          onClick={toggleViewer}
          className={`${open ? 'show-viewer' : 'hide-viewer'}`}
        >
          <img
            className={`fixed-image ${
              open ? 'translate-y-[-30%]' : 'translate-y-0'
            }`}
            src={src}
            alt="The witcher 2"
          />
        </div>
      </div>
    </div>
  );
};

ImageViewer.propTypes = {
  src: PropTypes.string,
  classes: PropTypes.string,
};

ImageViewer.defaultProps = {
  src: '',
  classes: '',
};
export default ImageViewer;
