import React from 'react';

const GeneralInfo = () => {
  return (
    <div className="General-info">
      <h2 className="title">
        Get in Touch
        <span className="text-green-custom font-thin"> \ </span>
      </h2>
      <div className="info-container">
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore.
        </p>
        <span className="data">Address</span>
        <span>329 South Street Court - Albany, NY 83741</span>
        <span className="data">Phone:</span>
        <span className="data-hover">(123) 456 - 7890</span>
        <span className="data">Email:</span>
        <span className="data-hover">info@example.com</span>
      </div>
    </div>
  );
};

export default GeneralInfo;
