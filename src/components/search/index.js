import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Search = (props) => {
  const { isOpen, setIsOpen } = props;
  const [inputValue, setInputValue] = useState();

  const closeSearchBar = (event) => {
    event.preventDefault();
    setIsOpen(false);
  };

  const handlerInputValue = (e) => {
    const {
      target: { value },
    } = e;

    setInputValue(value);
    console.log(inputValue);
  };

  return (
    <div
      className={`Searchbar ${isOpen ? 'visible opened' : 'invisible closed'}`}
    >
      <div className="border-solid border-b-[1px] w-[80%] md:w-[60%] xl:w-[50%]">
        <form className="relative flex justify-center">
          <span className="showTransition hideTransition">
            <Link to="/" className="inline-block p-2 lg:p-[10px]">
              <i className="fal fa-search Search-btn" />
            </Link>
            {!inputValue && (
              <label htmlFor="searchInput" className="p-2 Searchbar-label ">
                Search
              </label>
            )}
          </span>
          <input
            id="searchInput"
            onChange={handlerInputValue}
            value={inputValue || ''}
            type="text"
            className="Searchbar-input Input-transition-show"
          />
          <button onClick={closeSearchBar}>
            <i className="fal fa-times Close-btn" />
          </button>
        </form>
      </div>
    </div>
  );
};
Search.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

Search.defaultProps = {
  isOpen: false,
  setIsOpen: () => {},
};
export default Search;
