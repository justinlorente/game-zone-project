import React, { useEffect, useRef } from 'react';
import FormImg from '../../images/modal-img.jpg';
import PropTypes from 'prop-types';

const Modal = (props) => {
  const { isOpen, setIsOpen, children } = props;
  const ref = useRef();

  useEffect(() => {
    if (!document) return;
    const checkIfClickedOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.addEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isOpen]);

  return (
    <div className={`Newsletter-Modal ${isOpen ? 'visible' : ' invisible'}`}>
      <div ref={ref} className="flex flex-row">
        <img
          src={FormImg}
          className="w-[320px] h-[360px] hidden md:block"
          alt=""
        />
        <div className="flex w-[320px] h-[360px] bg-white justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

Modal.defaultProps = {
  isOpen: false,
  setIsOpen: () => {},
};
export default Modal;
