import React from 'react';
import FrontPage from '../components/FrontPage';
import GeneralInfo from '../components/GeneralInfo';
import Map from '../components/MapSection/Map';
import Form from '../components/InputsAndButtons/Form';
import Layout from '../components/layout';
import Clancys from '../images/front-page/front-page-clancys.jpg';

const Contacts = () => {
  return (
    <Layout>
      <div className="md:pt-[4.5rem] xl:pt-[4.5rem] pt-[3.4rem]">
        <FrontPage
          srcImg={Clancys}
          title={'Contacts'}
          redirectTitle={'Home'}
          redirectUrl={'/'}
        />
        <div className="flex flex-col px-[16%] py-6 h-full w-full sm:px-[113px] sm:py-10 md:flex-row md:px-[7%] md:py-11 lg:px-[8%] xl:px-[9.3%] xl:py-14 2xl:px-[19%]">
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-[50%]">
              <GeneralInfo />
            </div>
            <div className="w-full md:w-[50%] pt-5">
              <Form />
            </div>
          </div>
        </div>
      </div>
      <div className="h-96 w-full">
        <Map />
      </div>
    </Layout>
  );
};

export default Contacts;
