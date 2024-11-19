import React, { Fragment } from 'react';
import CircleCounter from './CircleCounter';
import NumbersCounter from './NumbersCounter';

const Counters = () => {
  return (
    <Fragment>
      <div className="Counters">
        <h2 className="text-purple font-semibold text-4xl p-3">Counters</h2>
        <div className="flex mt-5 mx-10 flex-col md:flex-row justify-center items-center md:justify-between ">
          <CircleCounter value="75" title="Graphic Design" />
          <CircleCounter value="84" title="Web Design" />
          <NumbersCounter amount={5378} title="Users" />
          <NumbersCounter amount={9037} title="Likes" />
        </div>
      </div>
    </Fragment>
  );
};

export default Counters;
