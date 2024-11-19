import React from 'react';

const NewsLetterForm = (props) => {
  const { classes } = props;

  return (
    <div className={`Newsletter-form ${classes}`}>
      <div className="icon-container">
        <i className="fal fa-paper-plane text-gray-500 text-3xl" />
      </div>
      <span className="icon-text uppercase text-[10px] text-gray-300">
        fresh updates
      </span>
      <h6 className="title capitalize text-[20px] font-bold tracking-tight text-center text-purple pb-3 px-14 lg:px-0">
        gamezone newsletter
      </h6>
      <form className="flex flex-row justify-between pb-2.5 w-[80%]">
        <input
          type="email"
          className="Newsletter-Input"
          placeholder="Your Email"
        />
        <button>
          <i className="fal fa-arrow-right text-sm text-green-custom" />
        </button>
      </form>
    </div>
  );
};
export default NewsLetterForm;
