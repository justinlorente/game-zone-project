import React, { Fragment } from 'react';

const Map = () => {
  const mapUrl = process.env.REACT_APP_MAP_URL;

  return (
    <Fragment>
      <iframe className="h-full w-full" src={mapUrl} />
    </Fragment>
  );
};

export default Map;
