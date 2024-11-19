import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Tabs = (props) => {
  const { selected, titleTabs, onChange, renderContent } = props;
  const [indexActive, setIndexActive] = useState(selected || 0);
  const [prevActive, setPrevActive] = useState(selected || 0);
  const [tabChanging, setTabChanging] = useState(false);

  useEffect(() => {
    if (indexActive === prevActive) return;
    setTimeout(() => {
      setPrevActive(indexActive);
    }, 600);
  }, [indexActive]);

  const settingIsActive = (index) => () => {
    setTabChanging(true);
    setTimeout(() => {
      setIndexActive(index);
      onChange && onChange(index);
      setTabChanging(false);
    }, 300);
  };

  const renderItems = () => {
    return titleTabs.map((tt, index) => {
      return (
        <li
          key={`tabItem-${index}`}
          onClick={settingIsActive(index)}
          className={`tab before:skew-x-20 ${
            index === indexActive ? 'active-tab' : 'inactive-tab'
          }`}
        >
          {typeof tt === 'string' ? <span>{tt}</span> : tt}
        </li>
      );
    });
  };

  return (
    <Fragment>
      <ul className="tabs">{renderItems()}</ul>
      <div
        key={`content-tab`}
        className={`p-6 transition ${
          tabChanging
            ? 'opacity-0 duration-300 ease-out'
            : 'opacity-100 duration-150 ease-in'
        }`}
      >
        {renderContent(indexActive)}
      </div>
    </Fragment>
  );
};

Tabs.propTypes = {
  title: PropTypes.array,
};

Tabs.defaultProps = {
  title: [],
};

export default Tabs;
