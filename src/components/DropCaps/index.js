import React from 'react';

const DropCaps = () => {
  return (
    <div className="font-roboto pb-[20px] lg:pb-[30px]">
      <h2 className="text-purple md:pt-6 xl:pt-11 pb-9">Dropcaps</h2>
      <div className="flex flex-col gap-y-2 md:flex-row gap-x-8">
        <p className="text-[0.89rem] 2xl:text-[1rem] text-gray-500">
          <span className="font-semibold bg-white float-left text-green-custom text-[2.5em] ml-5 mr-7 leading-[63px]">
            L
          </span>
          Lorem ipsum dolor sit amet, laboris adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
        <p className="text-[0.89rem] 2xl:text-[1rem] text-gray-500">
          <span className="font-semibold bg-white text-black float-left text-[2.5em] ml-5 mr-6 mx-5 leading-[63px]">
            N
          </span>
          Lorem ipsum dolor sit amet, laboris adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default DropCaps;
