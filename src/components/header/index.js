import React, { useState } from 'react';
import Logo from '../../images/logo-1.webp';
import menuData from '../../data/menuMainData.json';
import MenuItem from './MenuItem';
import MobileMenu from './MobileMenu';
import ShoppingCart from './ShoppingCart';
import Modal from './Modal';
import NewsLetterForm from './NewsLetterForm';
import Search from '../search';
import { Link } from 'gatsby';

const Header = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [searchBarIsOpen, setSearchBarIsOpen] = useState(false);
  const [shoppingCartIsOpen, setShoppingCartIsOpen] = useState(false);
  const [userEmailIsOpen, setUserEmailIsOpen] = useState(false);

  const openMobileMenu = () => {
    setMobileMenuIsOpen(true);
  };
  const toggleShoppingCart = () => {
    setShoppingCartIsOpen(!shoppingCartIsOpen);
  };
  const openEmail = () => {
    setUserEmailIsOpen(true);
  };

  const openSearchBar = () => {
    setSearchBarIsOpen(true);
  };

  const renderMenuItems = () => {
    return menuData.map((m) => {
      return (
        <MenuItem key={m.title} subMenu={m.subMenu}>
          <span>{m.title}</span>
        </MenuItem>
      );
    });
  };

  return (
    <header className="Header shadow-md">
      <div className="flex flex-row justify-center h-full w-[90%] md:w-[95%] xl:w-[1170px] mx-auto">
        <div className="Green-skew before:skew-x-20">
          <Link to="/" className="link-container">
            <img
              alt="logo"
              className="h-[16px] md:h-[18px] lg:h-[20px]"
              src={Logo}
            />
          </Link>
        </div>
        <nav className="relative py-7 px-4 hidden md:block md:px-7 xl:pl-16 xl:pr-12 xl:w-[69%]">
          <ul className="text-center font-roboto font-normal tracking-wider uppercase text-[11px]">
            {renderMenuItems()}
          </ul>
        </nav>
        <div className="icons-container">
          <button className="pr-5 z-10 md:hidden" onClick={openMobileMenu}>
            <i className="fal fa-bars text-[22px] text-gray-500" />
          </button>
          <button
            className="pr-6 text-gray-600 hover:text-green-custom cursor-pointer"
            onClick={openSearchBar}
          >
            <i
              className={`fal fa-search Icons-search ${
                searchBarIsOpen ? 'invisible' : 'visible'
              }`}
            />
          </button>
          <button
            className="md:pr-12 text-gray-600 hover:text-green-custom relative"
            onClick={toggleShoppingCart}
          >
            <i className="fal fa-shopping-bag" />
            <span className="cart-amount">0</span>
          </button>
          <div className="White-skew before:skew-x-20">
            <button className="mail-button" onClick={openEmail}>
              <i className="fal fa-envelope text-gray-400 text-base hover:text-green-custom" />
              <span className="pl-2 font-bold text-xs">Newsletter</span>
            </button>
          </div>
        </div>
      </div>
      <MobileMenu
        menuData={menuData}
        isOpen={mobileMenuIsOpen}
        setIsOpen={setMobileMenuIsOpen}
      />
      <Search isOpen={searchBarIsOpen} setIsOpen={setSearchBarIsOpen} />
      <ShoppingCart
        isOpen={shoppingCartIsOpen}
        setIsOpen={setShoppingCartIsOpen}
      />
      <Modal isOpen={userEmailIsOpen} setIsOpen={setUserEmailIsOpen}>
        <NewsLetterForm />
      </Modal>
    </header>
  );
};

export default Header;
