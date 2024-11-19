import React from 'react';
import GameVideoCardData from '../../data/GameVideoCardData.json';
import CardFullPicture from '../CardFullPicture';

const GameVideo = () => {
  const [firstEl, ...restEl] = GameVideoCardData;
  const renderGameVideoCard = () => {
    return restEl.map((p) => {
      return (
        <CardFullPicture
          key={p.id}
          id={p.id}
          url={p.url}
          title={p.title}
          srcImg={p.image}
          date={p.date}
          comments={p.comments}
          likes={p.likes}
          category={{
            label: 'gamers',
            variant: p.tagColor,
          }}
          cardFull={false}
          dimensions={`h-[17.7rem]  ${p.id === '2' ? 'col-card' : ''} `}
        />
      );
    });
  };

  return (
    <div className="Game-video">
      <div className="container px-4 pb-14 w-full mx-auto xl:w-[1208px]">
        <h2 className="font-roboto text-4xl font-bold text-white pt-10 xl:pt-16 pb-8">
          Game Video
          <span className="text-green-custom font-thin"> \ </span>
        </h2>
        <div className="lg:grid lg:grid-cols-2 rounded-lg">
          <div className="main-card">
            <CardFullPicture
              id={firstEl.id}
              url={firstEl.url}
              title={firstEl.title}
              srcImg={firstEl.image}
              date={firstEl.date}
              likes={firstEl.likes}
              comments={firstEl.comments}
              category={{
                label: 'gamers',
                variant: firstEl.colorTag,
              }}
              cardFull
              dimensions={`lg:pt-40 pt-28 pb-4 pl-5 pr-0`}
              iconPlayVideo
            />
          </div>
          <div className="lg:grid lg:grid-cols-2 ">{renderGameVideoCard()}</div>
        </div>
      </div>
    </div>
  );
};

export default GameVideo;
