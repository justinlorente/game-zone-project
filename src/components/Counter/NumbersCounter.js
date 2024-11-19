import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

const NumbersCounter = (props) => {
  const { amount, classes, title } = props;

  return (
    <div className={`numbers-counter ${classes}`}>
      <div className="m-2 inline-block">
        <span className="text-4xl lg:text-6xl font-roboto font-bold">
          <CountUp start={0} end={amount} duration={8} />
        </span>
        <span className="text-sm font-semibold block">{title}</span>
      </div>
    </div>
  );
};
NumbersCounter.propTypes = {
  amount: PropTypes.number,
  classes: PropTypes.string,
  title: PropTypes.string,
};

NumbersCounter.defaultProps = {
  amount: 0,
  classes: '',
  title: '',
};

export default NumbersCounter;
