import * as React from 'react';
import Logo from '../../images/logo-1.webp';

const Footer = () => {
  const platform = ['Playstation 4', 'XBOX One', 'PC', 'Steam', 'Origin'];
  const linksAdditional = ['Home', 'Store', 'Gallery', 'Portfolio', 'Contacts'];

  const renderListPlatform = () => {
    return platform.map((p) => {
      return (
        <li key={p}>
          <span className="hover:text-green-400 cursor-pointer transition duration-500 ease-in-out">
            {p}
          </span>
        </li>
      );
    });
  };

  const renderLinksAdditional = () => {
    return linksAdditional.map((l) => {
      return (
        <li key={l}>
          <span className="hover:text-green-400 cursor-pointer transition duration-500 ease-in-out">
            {l}
          </span>
        </li>
      );
    });
  };

  return (
    <footer className="Footer">
      <div className="container mx-auto">
        <div className="Footer-content">
          <div className="sm:pl-12 sm:pt-3 md:pl-10 md:pt-2 lg:pl-0 lg:pr-0 xl:pr-0 xl:place-self-start xl:text-center">
            <img className="pb-6 xl:pb-7 " src={Logo} alt={'logo'} />
            <p className="text-white ml-0 mr-auto text-[13px] xl:text-[16px] xl:tracking-[-0.8px] xl:leading-[18px]">
              ThemeREX © 2022. All rights reserved.
            </p>
          </div>
          <div className="place-self-start sm:pl-2 sm:pb-8 md:pl-4 lg:pr-0 lg:pl-7 lg:py-0 xl:pl-0">
            <p className="text-white font-medium text-[17px] border-t border-gray-800 w-full pt-4 sm:border-0 sm:pt-0 md:pt-1 xl:text-[18px]">
              Platform
              <span className="text-green-400 font-light select-none pl-1">
                \
              </span>
            </p>
            <ul className="text-white text-[13px] text-opacity-60 font-medium space-y-4 xl:space-y-4 xl:text-[14px] lg:pt-6 xl:pt-8 xl:text-opacity-80 xl:font-normal pt-7">
              {renderListPlatform()}
            </ul>
          </div>
          <div className="place-self-start sm:border-t sm:border-gray-800 w-full sm:pl-12 md:pl-9 lg:border-0 lg:pr-0 lg:pl-14 lg:py-0 xl:pl-0">
            <p className="text-white font-medium text-[17px] border-t border-gray-800 w-full pt-4 sm:border-0 md:pt-6 lg:leading-8 lg:p-0 xl:leading-10 xl:text-[18px]">
              Additional Links
              <span className="text-green-400 font-light select-none pl-1">
                \
              </span>
            </p>
            <ul className="text-white text-[13px] text-opacity-60 font-medium space-y-4 pt-7 lg:pt-6 xl:pt-6 xl:space-y-4 xl:text-[14px] xl:text-opacity-80 xl:font-normal">
              {renderLinksAdditional()}
            </ul>
          </div>
          <div className="place-self-start border-t border-gray-800 w-full lg:border-0 lg:pr-0 lg:pl-20 xl:pl-0 lg:py-0">
            <p className="text-white font-medium text-[17px] pt-4 sm:pl-3 md:pt-6 lg:leading-8 lg:p-0 xl:pl-1 xl:leading-10 xl:text-[18px]">
              Follow Us
              <span className="text-green-400 font-light select-none pl-1">
                \
              </span>
            </p>
            <div className="flex flex-row pl-3 gap-x-7 xl:gap-9 pt-9 text-[12px] sm:pl-4 md:pl-6 lg:pt-8 lg:pl-3">
              <i className="fab fa-twitter text-white cursor-pointer hover:text-green-400 transition duration-500 ease-in-out" />
              <i className="fab fa-facebook-f text-white cursor-pointer hover:text-green-400 transition duration-500 ease-in-out" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
