import React, { Fragment, useState, useRef, useEffect } from 'react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [rangeValue, setRangeValue] = useState(0);
  const [width, setWidth] = useState('');

  const audioPath =
    'https://gamezone.themerex.net/wp-content/uploads/2017/12/sample-melody.mp3';

  const audioPlayer = useRef();
  const animationRef = useRef();

  const onLoadedMetadata = () => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
  };

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const currentTime = calculateTime(rangeValue);
  const currentDuration = calculateTime(duration);

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  useEffect(() => {
    if (currentTime === currentDuration) {
      setIsPlaying(false);
      setRangeValue(0);
    }
  }, [currentTime]);

  const whilePlaying = () => {
    if (!audioPlayer.current) return;
    setRangeValue(audioPlayer.current.currentTime);
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = (event) => {
    const {
      target: { value },
    } = event;
    audioPlayer.current.currentTime = value;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changePlayerCurrentTime = () => {
    setWidth(`${(rangeValue / duration) * 100}%`);
  };

  const changeVolume = (e) => {
    audioPlayer.current.volume = e.target.value / 100;
  };

  return (
    <Fragment>
      <audio
        ref={audioPlayer}
        src={audioPath}
        preload="metadata"
        onLoadedMetadata={onLoadedMetadata}
        volume="true"
      />
      <button
        onClick={togglePlayPause}
        className="bg-green-custom rounded-full m-2"
      >
        <i
          className={`${
            isPlaying ? 'fas fa-pause' : 'fas fa-play'
          } text-white  text-[8px] p-3 hover:text-red-600 ease-in-out duration-300`}
        />
      </button>
      <div className="font-roboto text-sm text-white m-2">
        <span>{currentTime}</span>
      </div>
      <div className="m-2">
        <input
          key={`range-${rangeValue}`}
          className={`progressBar before:w-[${width}]`}
          type="range"
          step="0.05"
          value={rangeValue}
          max={duration}
          onChange={changeRange}
        />
      </div>
      <div className="font-roboto text-sm text-white m-2">
        <span>{currentDuration}</span>
      </div>
      <button className="bg-green-custom rounded-full m-2">
        <i className="fas fa-volume text-white  text-[8px] p-3 hover:text-red-600 ease-in-out duration-300" />
      </button>
      <input
        type="range"
        defaultValue="100"
        className="volume-bar"
        onChange={changeVolume}
      />
    </Fragment>
  );
};

export default AudioPlayer;
