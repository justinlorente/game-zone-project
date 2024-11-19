import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

const Events = (props) => {
  const { title, category, day, month, url } = props;

  return (
    <div className="events">
      <div className="date">
        <span className="block text-lg font-medium">{day}</span>
        <span className="text-[11px] uppercase">{month}</span>
      </div>
      <div className="info before:skew-x-20">
        <Link to={url}>
          <h6 className="font-bold mb-1">{title}</h6>
        </Link>
        <Link to={url}>
          <span className="category">{category}</span>
        </Link>
      </div>
    </div>
  );
};
Events.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  url: PropTypes.string,
  date: PropTypes.string,
  month: PropTypes.string,
};

Events.defaultProps = {
  title: '',
  url: '/',
  title: '',
  date: '',
  month: '',
};

export default Events;
