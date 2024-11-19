import React from 'react';
import TopGamesData from '../../data/TopGamesData.json';
import Tabs from './Tabs';
import GamesCard from './GamesCard';
import CardTwo from '../CardTwo';
import PropTypes from 'prop-types';

const TopGames = (props) => {
  const { header } = props;

  const itemsFound = TopGamesData.map((i) => i.title);

  const renderContent = (selected) => {
    const list = TopGamesData[selected]?.content ?? [];
    return list.map((l) => {
      return (
        <GamesCard
          key={l.id}
          id={l.id}
          url={l.url}
          title={l.title}
          srcImg={l.img}
          date={l.date}
          position={l.position}
        />
      );
    });
  };

  return (
    <CardTwo
      classes="Top-games"
      header={header}
      footer={{
        text: 'views more top games',
        url: '/404',
      }}
    >
      <Tabs titleTabs={itemsFound} renderContent={renderContent} />
    </CardTwo>
  );
};

TopGames.propTypes = {
  header: PropTypes.string,
};
TopGames.defaultProps = {
  header: '',
};

export default TopGames;
