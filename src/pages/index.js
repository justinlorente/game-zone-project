import * as React from 'react';
import Layout from '../components/layout';
import PromotionWidget from '../components/PromotionWidget';
import RecentReview from '../components/RecentReview';
import GameStore from '../components/GameStore';
import RecentNews from '../components/RecentNews';
import MostDiscussed from '../components/MostDiscussed';
import GameVideo from '../components/GameVideo';
import Subscription from '../components/Subscription';
import TopGames from '../components/TopGames';
import UpcomingGames from '../components/UpcomingGames';
import PopularArticles from '../components/PopularArticles';
import LatestNews from '../components/LatestNews';

const IndexPage = () => {
  return (
    <Layout>
      <PromotionWidget />
      <RecentReview />
      <div className="flex flex-col px-[16%] py-6 h-full w-full sm:px-[113px] sm:py-10 md:flex-row md:px-[7%] md:py-11 lg:px-[8%] xl:px-[9.3%] xl:py-14 2xl:px-[19%]">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-5 md:w-[68%] w-full">
            <RecentNews />
            <MostDiscussed />
          </div>
          <div className="bg-white h-full w-full md:w-[32%]">
            <TopGames header="Top 5 Games on Sale" />
            <Subscription />
            <UpcomingGames />
          </div>
        </div>
      </div>
      <GameVideo />
      <div className="flex flex-col px-[16%] py-6 h-full w-full sm:px-[113px] sm:py-10 md:flex-row md:px-[7%] md:py-11 lg:px-[8%] xl:px-[9.3%] xl:py-14 2xl:px-[19%]">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-5 md:w-[68%] w-full">
            <LatestNews />
          </div>
          <div className="bg-white h-full w-full md:w-[32%]">
            <PopularArticles display />
          </div>
        </div>
      </div>
      <GameStore />
    </Layout>
  );
};

export default IndexPage;
