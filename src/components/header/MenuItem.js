import { Link } from 'gatsby';
import React from 'react';

const MenuItem = (props) => {
  const { subMenu, children } = props;

  const renderSubMenuItems = () => {
    return subMenu.map((e) => {
      return (
        <li
          key={e.title}
          className="mb-5 hover:hover:text-orange-custom ease-in-out duration-200"
        >
          <Link to={e.link}>
            <span>{e.title}</span>
          </Link>
        </li>
      );
    });
  };
  const renderSubMenu = () => {
    if (!subMenu) return;
    return (
      <div className="sub-menu">
        <ul className="group-hover:visible group-hover:opacity-100">
          {renderSubMenuItems()}
        </ul>
      </div>
    );
  };
  return (
    <li className="Menu-item group ">
      {children}
      {renderSubMenu()}
    </li>
  );
};

export default MenuItem;
