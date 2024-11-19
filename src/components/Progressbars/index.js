import React, { useEffect, useState } from 'react';

const Progressbars = () => {
  const useScrollHandler = () => {
    const [scroll, setScroll] = useState(1);

    useEffect(() => {
      const onScroll = () => {
        const scrollCheck = window.scrollY > 300;
        setScroll(scrollCheck);
      };

      document.addEventListener('scroll', onScroll);
      return () => {
        document.removeEventListener('scroll', onScroll);
      };
    }, [scroll, setScroll]);

    return scroll;
  };

  const scroll = useScrollHandler();

  return (
    <div className={`Progress-bars ${scroll ? 'display-bars' : 'hide-bars'}`}>
      <h2 className="text-purple font-semibold text-3xl p-3">Progress bar</h2>
      <div className="m-2">
        <div className="flex flex-row justify-between">
          <span className="title">graphic design</span>
          <span className="percent">98%</span>
        </div>
        <input className="bar before:w-[98%]" type="range" />
        <div className="flex flex-row justify-between">
          <span className="title">html & css3</span>
          <span className="percent">93%</span>
        </div>
        <input className="bar before:w-[93%]" type="range" />
        <div className="flex flex-row justify-between">
          <span className="title">wordpress</span>
          <span className="percent">95%</span>
        </div>
        <input className="bar before:w-[93%]" type="range" />
        <div className="flex flex-row justify-between">
          <span className="title">web design</span>
          <span className="percent">90%</span>
        </div>
        <input className="bar before:w-[90%]" type="range" />
      </div>
    </div>
  );
};

export default Progressbars;
