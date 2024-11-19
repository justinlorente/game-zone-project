import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

const CardTwo = (props) => {
  const { header, children, classes, footer } = props;
  return (
    <aside className={`Card-two shadow-md border-white-smoke ${classes}`}>
      <div className="Card-two-header">
        <h6 className="text">
          {header}
          <span className="mx-2 font-normal text-green-custom text-2xl">\</span>
        </h6>
      </div>
      <div className="Card-two-content">{children}</div>
      <div className="Card-two-footer">
        <Link to={footer.url} className="link">
          {footer.text}
          <span className="font-light text-green-custom mx-2">――――</span>
        </Link>
      </div>
    </aside>
  );
};

CardTwo.propTypes = {
  header: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.string,
  footer: PropTypes.object,
};

CardTwo.defaultProps = {
  header: '',
  classes: '',
  footer: {},
};

export default CardTwo;
