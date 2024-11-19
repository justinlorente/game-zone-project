import React from 'react';

const Blockquote = () => {
  return (
    <div className="Blockquote">
      <h2 className="text-purple text-3xl mb-5">Blockquote</h2>
      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <blockquote className="quote">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud.
        <span className="cite">
          <cite className="not-italic">steven perez</cite>
        </span>
      </blockquote>
      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco.
      </p>
    </div>
  );
};

export default Blockquote;
