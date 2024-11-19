import React from 'react';
import Map from './Map';

const MapSection = () => {
  return (
    <div className="w-full h-full">
      <hr className="text-gray-300 py-10" />
      <h3 className="text-3xl md:text-4xl pb-4 text-purple font-roboto font-bold">
        Map
      </h3>
      <div className="h-[300px]">
        <Map />
      </div>
    </div>
  );
};

export default MapSection;
