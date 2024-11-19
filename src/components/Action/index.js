import { Link } from 'gatsby';
import React from 'react';
import ActionImg from '../../images/action.jpg';

const Action = () => {
  return (
    <div className="Action">
      <hr className="text-gray-300 py-4 md:py-10" />
      <h3 className="title">Action</h3>
      <div className="relative">
        <img
          src={ActionImg}
          className="w-full h-64 lg:h-80 object-cover relative rounded-md"
          alt="Action image"
        />
        <div className="text-container">
          <span className="uppercase text-green-custom font-normal text-[11px] tracking-wider">
            news
          </span>
          <h4 className="text-3xl lg:text-6xl text-white my-4 md:my-7">
            <span className="block"> Life Coaching </span>
            <span>Benefits</span>
          </h4>
          <Link
            to="/test"
            className="link-read-more-animation uppercase text-green-custom "
          >
            read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Action;
