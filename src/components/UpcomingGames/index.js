import React from 'react';
import CardTwo from '../CardTwo';
import UpcomingGamesData from '../../data/UpcomingGamesData.json';
import Events from './Events';

const UpcomingGames = () => {
  const renderEventInfo = () => {
    return UpcomingGamesData.map((e) => {
      return (
        <Events
          key={e.id}
          title={e.title}
          category={e.category}
          day={e.day}
          month={e.month}
          url={e.url}
        />
      );
    });
  };

  return (
    <div className="Upcoming-games">
      <CardTwo
        header="Upcoming Games"
        classes="Upcoming-games"
        footer={{
          text: 'views more top games',
          url: '/404',
        }}
      >
        {renderEventInfo()}
      </CardTwo>
    </div>
  );
};

export default UpcomingGames;
