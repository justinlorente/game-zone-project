import React from 'react';
import CardFullPicture from '../CardFullPicture';
import postsMainData from '../../data/PromotionWidgetData.json';

const PromotionWidget = () => {
  const [firstEl, ...restEl] = postsMainData;

  const renderCards = () => {
    return restEl.map((i) => {
      return (
        <div
          key={i.id}
          className="relative z-[0] md:w-6/12 md:h-[50%] w-full h-full"
        >
          <CardFullPicture
            id={i.id}
            category={{
              label: i.category,
              variant: i.colorCategory,
              url: '/test',
            }}
            title={i.title}
            date={i.date}
            comments={i.comments}
            likes={i.likes}
            cardFull={false}
            srcImg={i.image}
            url="/"
            dimensions={'h-[300px] lg:h-[369px]'}
          />
        </div>
      );
    });
  };

  return (
    <div className="Promotion-widget">
      <div className="relative lg:w-6/12 w-full h-full">
        <CardFullPicture
          id={firstEl.id}
          category={{
            label: firstEl.category,
            variant: firstEl.colorCategory,
            url: '/test',
          }}
          title={firstEl.title}
          date={firstEl.date}
          comments={firstEl.comments}
          likes={firstEl.likes}
          cardFull
          srcImg={firstEl.image}
          url="/404"
          iconPlayVideo
          dimensions={'h-[400px] lg:h-[738px]'}
        />
      </div>
      <div className="flex-row w-full md:h-full md:flex md:flex-wrap md:w-full lg:w-6/12">
        {renderCards()}
      </div>
    </div>
  );
};

export default PromotionWidget;
