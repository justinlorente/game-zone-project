import React, { Fragment, useState } from 'react';
import Logo from '../../images/logo-1.webp';
import PropTypes from 'prop-types';

const MobileMenu = (props) => {
  const { menuData, isOpen, setIsOpen } = props;
  const [itemCollapse, setItemCollapse] = useState('');

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleSubMenu = (itemId) => () => {
    setItemCollapse((prev) => {
      if (itemId === prev) return '';
      return itemId;
    });
  };

  const renderChevronIcon = (subItems, itemId) => {
    const toggleChevron =
      itemCollapse === itemId ? 'fal fa-chevron-up' : 'fal fa-chevron-down';
    if (!subItems) return;
    return (
      <i
        className={`${toggleChevron} text-[13px] p-1.5 px-[7px] bg-gray-700`}
      />
    );
  };

  const renderSubmenu = (subMenu) => {
    if (!subMenu) return;
    return subMenu.map((sm) => {
      return (
        <li key={sm.title} className="ml-2 pb-1">
          {sm.title}
        </li>
      );
    });
  };

  const renderMenuItems = () => {
    return menuData.map((m) => {
      const subItems = m.subMenu;
      const showClass =
        itemCollapse === m.title ? 'max-h-[30vh] ease-in' : 'max-h-0 ease-out';

      return (
        <Fragment key={m.title}>
          <li className="MobileMenu-items" onClick={toggleSubMenu(m.title)}>
            <span className="relative">{m.title}</span>
            {renderChevronIcon(subItems, m.title)}
          </li>
          <div
            className={`overflow-hidden transition-max-height duration-700 ${showClass}`}
          >
            <ul className="text-sm pb-1">{renderSubmenu(subItems)}</ul>
          </div>
        </Fragment>
      );
    });
  };
  const display = isOpen ? 'h-screen' : 'h-0';
  return (
    <div className={`MobileMenu ${display}`}>
      <div className="MobileMenu-close-button">
        <i
          className="fal fa-times text-white text-[20px]"
          onClick={closeMenu}
        />
      </div>
      <img className="MobileMenu-logo" src={Logo} />
      <ul className="MobileMenu-container">{renderMenuItems()}</ul>
      <input className="MobileMenu-input" placeholder="Search" />
      <i className="fal fa-search MobileMenu-search-icon"></i>
      <span className="MobileMenu-social-media">
        <i className="fab fa-twitter mr-4 text-green-custom"></i>
        <i className="fab fa-facebook-f text-green-custom"></i>
      </span>
    </div>
  );
};

MobileMenu.propTypes = {
  menuData: PropTypes.array,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

MobileMenu.defaultProps = {
  menuData: {},
  isOpen: false,
  setIsOpen: () => {},
};

export default MobileMenu;
