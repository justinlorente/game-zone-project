import React from 'react';

const IconHover = (props) => {
  const { type, onClick } = props;
  let fn;

  const icon = {
    video: function () {
      return (
        <div onClick={onClick} className="iconHover">
          <div className="icon-video">
            <div className="border">
              <i className="fas fa-play" />
            </div>
          </div>
        </div>
      );
    },
    chain: function () {
      return (
        <div onClick={onClick} className="iconHover">
          <div className="icon-link">
            <i className="fal fa-link" />
          </div>
        </div>
      );
    },
    default: function () {
      return <React.Fragment />;
    },
  };

  if (icon[type]) {
    fn = icon[type];
  } else {
    fn = icon['default'];
  }

  return fn();
};

export default IconHover;
