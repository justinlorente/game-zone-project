import { Link } from 'gatsby';
import React, { Fragment } from 'react';
import NewsLetterForm from '../header/NewsLetterForm';

const Subscription = () => {
  return (
    <Fragment>
      <div className="flex flex-row w-full container">
        <Link className="w-full m-1" to="/">
          <div className="flex flex-row justify-center items-center h-8 bg-blue-twitter rounded hover:opacity-80 ease-out duration-200">
            <i className="fab fa-twitter text-white text-xs" />
          </div>
        </Link>
        <Link className="w-full m-1" to="/">
          <div className="flex flex-row justify-center items-center h-8 bg-blue-facebook rounded hover:opacity-80 ease-in-out duration-200">
            <i className="fab fa-facebook-f text-white text-xs" />
          </div>
        </Link>
      </div>
      <div className="mt-5 w-full bg-no-repeat bg-newsletter-form h-60 pt-8 xl:pt-12 rounded">
        <NewsLetterForm classes="Socials" />
      </div>
    </Fragment>
  );
};

export default Subscription;
