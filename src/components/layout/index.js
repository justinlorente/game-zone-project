import React from 'react';
import Footer from '../footer';
import Header from '../header';
import { Helmet } from 'react-helmet';
import PanelRight from '../PanelRight';
import { navigate } from 'gatsby';
import BtnScrollTop from '../BtnScrollTop';

const Layout = (props) => {
  const { children } = props;

  return (
    <React.Fragment>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-rqn26AG5Pj86AF4SO72RK5fyefcQ/x32DNQfChxWvbXIyXFePlEktwD18fEz+kQU"
          crossOrigin="anonymous"
        />
      </Helmet>
      <div>
        <Header />
        <div>{children}</div>
        <PanelRight
          items={[
            {
              tabItem: (
                <i className="fal fa-shopping-cart text-[15px] sm:text-[19px] xl:text-[19px] font-light inline-block align-baseline" />
              ),
              descriptionTabText: 'Buy Theme',
              onClick: () => {
                navigate('/');
              },
            },
            {
              tabItem: (
                <i className="fal fa-image text-[21px] sm:text-[25px] xl:text-[25px] font-light" />
              ),
              openPanel: true,
              descriptionTabText: 'Our Bestseller',
            },
            {
              tabItem: (
                <i className="fal fa-window text-[21px] sm:text-[25px] xl:text-[25px] font-thin" />
              ),
              descriptionTabText: 'Hide Panel',
              onClick: () => {
                navigate('/');
              },
            },
          ]}
        />
        <BtnScrollTop />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
