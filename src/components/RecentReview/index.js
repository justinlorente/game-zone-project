import React from 'react';
import Card from '../Card';
import GetImage from './GetImage';
import recentReviewData from '../../data/recentReviewData.json';
import { Link } from 'gatsby';

const RecentReview = () => {
  const renderCards = () => {
    return recentReviewData.map((i) => {
      const isVideo = i.id === 2;
      const platformTag = i.platform.map((p) => (
        <Link key={`${i.title}-${p}`} className="px-[2px]" to="/test">
          {p}
        </Link>
      ));
      return (
        <Card
          key={i.id}
          imgSrc={GetImage(i.id)}
          title={i.title}
          date={i.date}
          comments={i.comments}
          likes={i.likes}
          colorTag={'yellow'}
          isVideo={isVideo}
          withOpacity={false}
          tagContent={platformTag}
          urlCard={'/404'}
          key={i.id}
          classes={isVideo ? 'is-video' : ''}
          classesImg={
            'h-[257px] sm:h-[400px] md:h-[142px] lg:h-[200px] xl:h-[231px] 2xl:h-[249px]'
          }
          classesTitle={
            'pt-4 leading-[20px] tracking-[0.3px] text-[14px] sm:text-[0.884rem] md:leading-[22px] md:pb-0 lg:pb-2 lg:leading-[21px] xl:leading-[19px] xl:tracking-[-0.5px] xl:text-[16px] 2xl:text-[1.145rem] 2xl:leading-[21px] text-purpleGameZone'
          }
          classesTag="bottom-[11%]"
          classesPostInfo={'recent-review'}
        />
      );
    });
  };

  return (
    <div className="Recent-review-container">
      <div className="container mx-auto">
        <h3 className="xl:text-[35px] font-bold text-[33px] tracking-[-0.2px] md:pt-0 md:tracking-[0.8px] lg:tracking-[0.2px] lg:text-[32px] xl:tracking-[-0.7px] pb-[23px] pt-1 xl:pb-[26px] 2xl:text-[40px] 2xl:pb-7 text-purpleGameZone">
          Recent Reviews
          <span className="text-green-600 font-light select-none pl-1">\</span>
        </h3>
        <div className="grid grid-col-1 pb-0 gap-y-3 sm:gap-y-5 md:flex md:flex-row md:gap-x-[30px] h-full w-full">
          {renderCards()}
        </div>
      </div>
    </div>
  );
};

export default RecentReview;
