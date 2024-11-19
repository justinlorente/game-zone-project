import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Video = (props) => {
  const { classes, srcImg } = props;
  const [IsPlaying, setIsPlaying] = useState(false);

  const onPlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className={`${classes} relative`}>
      <h2 className="font-roboto text-purple font-semibold text-3xl p-3">
        Video
      </h2>
      <div className="image z-[1]">
        <img
          className={`rounded-md object-cover h-full w-full transition-all ease-in-out delay-500 ${
            IsPlaying ? 'opacity-0' : 'opacity-100'
          }`}
          src={srcImg}
          alt="video image"
        />
        <div className="iconHover absolute z-10 top-1/3 left-0 right-0 hover:cursor-pointer">
          <div onClick={onPlayVideo} className="icon-video">
            <div className="border">
              <i className="fas fa-play" />
            </div>
          </div>
        </div>
        <div
          className={`absolute h-full w-full top-0 left-0 bottom-0 right-0 bg-black ease-in-out z-[3] duration-300 delay-300 ${
            IsPlaying ? 'opacity-100 ' : 'opacity-0'
          }`}
        ></div>
      </div>
      <iframe
        src="https://player.vimeo.com/video/154709932?autoplay=1"
        title="video"
        className={`absolute top-[30px] left-0 right-0 bottom-0 h-full w-full ease-in-out duration-1000 delay-1000  ${
          IsPlaying ? 'opacity-100 z-[4]' : 'opacity-0'
        } `}
      />
    </div>
  );
};

Video.propTypes = {
  classes: PropTypes.string,
  srcImg: PropTypes.string,
};

Video.defaultProps = {
  classes: '',
  srcImg: '',
};

export default Video;
