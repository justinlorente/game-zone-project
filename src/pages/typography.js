import React from 'react';
import FrontPage from '../components/FrontPage';
import Clancys from '../images/front-page/front-page-clancys.jpg';
import Layout from '../components/layout';
import StandardInlineElements from '../components/StandardInlineElements';
import DropCaps from '../components/DropCaps';
import HeaderTagsStyles from '../components/HeaderTagsStyles';
import Blockquote from '../components/Blockquote';
import ImageAlignment from '../components/ImageAlignment';
import TopGames from '../components/TopGames';
import PopularArticles from '../components/PopularArticles';
import Subscription from '../components/Subscription';
import PropTypes from 'prop-types';
import InputsAndButtons from '../components/InputsAndButtons';

const Typography = () => {
  return (
    <Layout>
      <div className="Typography md:pt-[4.5rem] xl:pt-[4.5rem] pt-[3.4rem] relative">
        <FrontPage
          srcImg={Clancys}
          title={'Typography'}
          redirectTitle={'Home'}
          redirectUrl={'/'}
        />
        <div className="px-[16%] py-6 h-full w-full sm:px-[113px] sm:py-10 md:px-[7%] md:py-16 lg:py-11 lg:px-[9%] xl:px-[9.3%] xl:py-14 2xl:px-[19%] 2xl:py-16">
          <div className="container mx-auto flex flex-col lg:flex-row gap-8">
            <div className="flex flex-col gap-5 lg:w-[71%] w-full 2xl:w-[70%] 2xl:pr-[1.9rem]">
              <HeaderTagsStyles />
              <Blockquote />
              <ImageAlignment />
              <hr className="text-gray-300" />
              <StandardInlineElements />
              <hr className="text-gray-300" />
              <DropCaps />
              <hr className="text-gray-300" />
              <InputsAndButtons />
            </div>
            <div className="bg-white h-full w-full lg:w-[29%] 2xl:w-[30%] sticky top-[72px]">
              <PopularArticles display={false} />
              <div className="mb-5">
                <Subscription />
              </div>
              <TopGames header="Top 5 Best Games" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Typography.propTypes = {
  display: PropTypes.bool,
};
Typography.defaultProps = {
  display: true,
};

export default Typography;
