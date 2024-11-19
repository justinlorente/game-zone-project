import React from 'react';
import Card from './Card.js';
import { Link } from 'gatsby';
import LatestNewsData from '../../data/LatestNewsData.json';

const LatestNews = () => {
  const renderCard = () => {
    return LatestNewsData.map((ln) => {
      return (
        <Card
          key={ln.id}
          title={ln.title}
          imgSrc={ln.imgSrc}
          colorTag={ln.colorTag}
          isVideo={false}
          url={ln.url}
          withOpacity
          tagContent={
            <Link className="pl-1" to={ln.urlTag}>
              {ln.platform}
            </Link>
          }
          classesTag="bottom-[12%] xl:bottom-[11%]"
          classesImg="h-[190px] sm:h-[104px] md:h-[110px] lg:h-[148px] xl:h-[172px] 2xl:h-[182px]"
          infoPost={{
            date: ln.date,
            likes: ln.likes,
            comments: ln.comments,
          }}
          text={ln.text}
        />
      );
    });
  };
  return (
    <div className="Latest-news">
      <h3 className="Latest-news-title text-purple">
        Latest News
        <span className="text-green-600 font-light select-none pl-1">\</span>
      </h3>
      {renderCard()}
      <button className="btn-footer h-[54px] w-full bg-green-custom flex hover:bg-green-500 duration-300 rounded-md mt-4">
        <Link
          to="/"
          className="h-full w-full text-center pt-4 text-white font-bold font-roboto text-[11px] md:text-[12px] lg:text-[13px] tracking-[0.4px] leading-6"
        >
          VIEW MORE POSTS
        </Link>
      </button>
    </div>
  );
};

export default LatestNews;
