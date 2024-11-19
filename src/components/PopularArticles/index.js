import React from 'react';
import { Link } from 'gatsby';
import CardTwo from '../CardTwo';
import Tag from '../Tag';
import IconHover from '../IconHover';
import PopularArticlesData from '../../data/PopularArticlesData.json';
import TheWitcher from '../../images/The-witcher-3.jpg';
import TomClancys from '../../images/tom-clancys.jpg';
import Article from './Article';
import PropTypes from 'prop-types';

const PopularArticles = (props) => {
  const { display } = props;

  const [firstEl, ...restEl] = PopularArticlesData;
  const renderArticlesInfo = () => {
    return restEl.map((d) => {
      return (
        <div key={d.id} className="border-t-[1px] my-2">
          <Article
            text={d.title}
            date={d.date}
            likes={d.likes}
            comments={d.comments}
            colorText="text-gray-400"
            url={d.url}
          />
        </div>
      );
    });
  };

  return (
    <div className="Popular-articles">
      <CardTwo
        header="Popular Articles"
        classes="Popular-articles"
        footer={{
          text: 'views more top games',
          url: '/404',
        }}
      >
        <div className="main-article">
          <div className="image">
            <IconHover type="chain" />
            <img src={TheWitcher} className="w-full h-full rounded" />
          </div>
          <div className="mt-2 ml-1">
            <Tag colorTag="yellow">
              <Link className="first-link" to="/test">
                pc, xbox
              </Link>
              <Link to="/test">playstation</Link>
            </Tag>
          </div>
          <Article
            text={firstEl.title}
            date={firstEl.date}
            likes={firstEl.likes}
            comments={firstEl.comments}
            colorText="text-gray-400"
            url={firstEl.url}
          />
        </div>
        <div className="px-5">{renderArticlesInfo()}</div>
      </CardTwo>
      <div className={`mt-10 mb-3 mx-5 ${display ? 'block' : 'hidden'}`}>
        <img className="h-full" src={TomClancys} alt="Tom Clancy's Division" />
      </div>
    </div>
  );
};

PopularArticles.propTypes = {
  display: PropTypes.bool,
};
PopularArticles.defaultProps = {
  display: true,
};

export default PopularArticles;
