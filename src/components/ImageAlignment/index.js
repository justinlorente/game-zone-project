import React from 'react';
import Uncharted from '../../images/uncharted-closeup.jpg';
import Witcher from '../../images/witcher-closeup.jpg';
import ImageViewer from './ImageViewer';

const ImageAlignment = () => {
  return (
    <div className="Image-alignment relative">
      <h2 className="text-purple text-3xl mb-5">Image Alignment</h2>
      <p className="text mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <span className="image-container">
        <img className="image" src={Uncharted} alt="uncharted image" />
        <span className="title-image"> Title of Image</span>
      </span>
      <p className="text mb-5 ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p className="text mb-5">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt.
      </p>
      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div>
        <ImageViewer
          src={Witcher}
          classes="float-right ml-4 mt-5 h-[210px] w-[275px] md:h-[247px] md:w-[349px] cursor-pointer"
        />
      </div>
      <p className="text mb-5 mt-5 ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p className="text mb-5">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt.
      </p>
      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};

export default ImageAlignment;
