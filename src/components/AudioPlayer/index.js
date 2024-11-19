import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from './AudioPlayer';

const AudioPlayerSection = (props) => {
  const { classes, srcImg, title } = props;

  return (
    <div className="w-full md:w-[50%] md:pr-6">
      <h2 className="font-roboto text-purple font-semibold text-3xl p-3">
        Audio
      </h2>
      <div className={`${classes}`}>
        <div className="flex flex-row m-5">
          <img
            className="h-14 w-14 rounded-md"
            src={srcImg}
            alt="Audio image"
          />
          <div className="text-white font-roboto flex flex-col p-3">
            <span className="text-xs tracking-wide pb-1">Lily Hunter</span>
            <span className="text-sm font-bold tracking-wide">{title}</span>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center m-2 lg:m-5">
          <AudioPlayer />
        </div>
      </div>
    </div>
  );
};

AudioPlayerSection.propTypes = {
  classes: PropTypes.string,
  srcImg: PropTypes.string,
  title: PropTypes.string,
};

AudioPlayerSection.defaultProps = {
  classes: '',
  srcImg: '',
  title: '',
};

export default AudioPlayerSection;
