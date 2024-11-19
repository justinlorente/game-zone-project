import React from 'react';
import Card from '../Card';
import Uncharted from '../../images/Uncharted-4.jpg';
import BestBuy from '../../images/Best-buy.jpg';
import TheWitcher from '../../images/The-witcher-3.jpg';
import { Link, navigate } from 'gatsby';
import IconHover from '../IconHover';
import Tag from '../Tag';
import PostInfo from '../PostInfo';

const RecentNews = () => {
  const handleClick = () => {
    navigate('/');
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleClick();
    }
  };

  return (
    <div className="Recent-news">
      <h3 className="Recent-news-title">
        Recent News
        <span className="text-green-600 font-light select-none pl-1">\</span>
      </h3>
      <div className="flex flex-col">
        <div className="w-full flex flex-col-reverse md:flex-row gap-7">
          <div className="md:w-[32%] lg:w-[33%] w-full px-0">
            <Card
              imgSrc={Uncharted}
              title="Sign up for Giveaway of Uncharted 4"
              date="09.10.2017"
              comments={0}
              likes={74}
              colorTag={'yellow'}
              isVideo={true}
              withOpacity={true}
              tagContent={<Link to="/test">PlayStation</Link>}
              urlCard={'/test'}
              classes="is-video pb-2 md:p-0"
              classesImg={
                'h-[257px] sm:h-[400px] md:h-[135px] lg:h-[185px] xl:h-[210px] 2xl:h-[225px]'
              }
              classesTitle={
                'tracking-[0.2px] text-[14px] pt-3 sm:text-[0.884rem] md:pb-1 md:tracking-[0.5px] md:tracking-normal xl:text-[0.984rem] xl:pr-5 xl:leading-[19px] xl:pb-2 2xl:text-[1.125rem] 2xl:leading-[22px] text-purple'
              }
              classesTag="bottom-[11%]"
              classesPostInfo="recent-news"
            />
            <Card
              imgSrc={BestBuy}
              title="Early Black Friday deals at Best Buy, Xbox One X"
              date="09.06.2017"
              comments={0}
              likes={50}
              colorTag={'orange'}
              isVideo={false}
              withOpacity={true}
              tagContent={<Link to="/test">PlayStation</Link>}
              urlCard={'/'}
              classes="pt-5"
              classesImg={
                'h-[257px] sm:h-[400px] md:h-[135px] lg:h-[185px] xl:h-[210px] 2xl:h-[225px]'
              }
              classesTitle={
                'tracking-[0.2px] text-[0.984rem] sm:text-[0.884rem] md:pb-1 md:tracking-[0.5px] xl:tracking-normal xl:text-[0.984rem] xl:pr-2 xl:leading-[19px] xl:pb-2 2xl:text-[1.125rem] 2xl:leading-[22px] text-purple'
              }
              classesTag="bottom-[11%]"
              classesPostInfo="recent-news"
            />
          </div>
          <div
            className="img-full"
            role="button"
            tabIndex="-1"
            onClick={handleClick}
            onKeyDown={handleKeyDown}
          >
            <img
              src={TheWitcher}
              className="h-full w-full object-cover"
              alt="the Witcher"
            />
            <IconHover type={'chain'} />
            <div className="absolute bottom-[8%] sm:bottom-[8%] md:bottom-[7%] xl:bottom-[4%] px-7 xl:px-9">
              <Tag colorTag={'green'} classes={'text-[15px]'}>
                <Link className="pr-2" to="/test">
                  Pc
                </Link>
                <Link className="pr-2" to="/test">
                  Xbox
                </Link>
                <Link className="pr-2" to="/test">
                  PlayStation
                </Link>
              </Tag>
              <h4 className="img-full-title">
                The Witcher 3: Blood & Wine — Best Endings
              </h4>
              <PostInfo
                date="12.12.2017"
                comments={3}
                likes={74}
                colorText={'text-slate-300'}
                urlPost={'/'}
                classes="recent-news"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
