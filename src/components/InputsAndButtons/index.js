import { Link } from 'gatsby';
import React from 'react';
import Form from './Form';

const InputsAndButtons = () => {
  const scrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="Inputs-and-buttons">
      <h2 className="pb-5">Inputs And Buttons</h2>
      <Form />
      <button type="button" onClick={scrollTop} className="button mt-4">
        <span className="button-text">button</span>
      </button>
      <div className="flex flex-col md:flex-row md:grid-cols-2 mt-3">
        <span className="mr-20">
          <Link
            to="/"
            className="link-read-more-animation uppercase text-green-custom "
          >
            read more
          </Link>
        </span>
        <Link
          to="/"
          className="link-read-more-animation uppercase hover:text-green-custom ease-in-out duration-300"
        >
          view more games
        </Link>
      </div>
    </div>
  );
};

export default InputsAndButtons;
