import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';

const CircleCounter = (props) => {
  const { value, classes, title } = props;

  return (
    <div className={`circle-counter ${classes}`}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        strokeWidth={2}
        styles={{
          path: {
            stroke: '#28ae4e',
          },
          text: {
            fill: '#12101c',
            fontSize: '16px',
            fontWeight: '600',
            fontFamily: 'Roboto',
          },
        }}
      />
      <h3 className="text-sm font-roboto text-purple m-3 text-center font-semibold">
        {title}
      </h3>
    </div>
  );
};

CircleCounter.propTypes = {
  value: PropTypes.string,
  classes: PropTypes.string,
  title: PropTypes.string,
};

CircleCounter.defaultProps = {
  value: '',
  classes: '',
  title: '',
};

export default CircleCounter;
