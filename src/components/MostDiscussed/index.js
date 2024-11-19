import { Link } from 'gatsby';
import React from 'react';
import BestBuy from '../../images/Best-buy.jpg';
import PostInfo from '../PostInfo';
import ImageWithTag from '../ImageWithTag';
import Uncharted from '../../images/Uncharted-4.jpg';
import Card from '../Card';
import AssassinCreed from '../../images/Assassin-creed.jpg';

const MostDiscussed = () => {
  return (
    <div className="Most-discussed">
      <h3 className="Most-discussed-title">
        Most Discussed
        <span className="text-green-600 font-light select-none"> \ </span>
      </h3>
      <div className="flex flex-col md:flex-row gap-7 w-full">
        <div className="flex flex-col gap-2 w-full md:w-[48%] xl:w-[50%] Most-discussed-image-full">
          <ImageWithTag
            srcImage={BestBuy}
            colorTag="green"
            classesTag="bottom-[11%] md:bottom-[8%] lg:bottom-[11%] xl:bottom-[5%]"
            classes={
              'h-[170px] sm:h-[255px] md:h-[280px] lg:h-[400px] xl:h-[444px] 2xl:h-[498px] w-full'
            }
            isVideo={false}
            url={'/'}
            urlTag={'/'}
            altImg={'BestBuy'}
            withOpacity
            contentTag={
              <React.Fragment>
                <Link className="pl-1" key={'News & Updates'} to="/test">
                  News & Updates
                </Link>
                <Link className="pl-2 pr-1" key={'X-box'} to="/test">
                  X-box
                </Link>
              </React.Fragment>
            }
          />
          <span className="text-card-full">
            Top 10 Car Addons for GTA San Andreas
          </span>
          <PostInfo
            date="12.08.2017"
            comments={3}
            likes={12}
            colorText={'text-slate-400'}
            urlPost={'/'}
            classes="most-discussed"
          />
          <p className="text-[14px] sm:text-[13px] lg:text-[14px] xl:pr-5 xl:text-[14.3px] 2xl:text-[16px] text-gray-500">
            Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            Neque porro quisquam est,...
          </p>
          <span>
            <Link to="/" className="link-read-more-animation">
              READ MORE
            </Link>
          </span>
        </div>
        <div className="flex flex-col gap-y-5 w-full md:w-[52%] xl:w-[50%]">
          <Card
            imgSrc={Uncharted}
            title="Uncharted 4: A Thief’s End- Best PS4 Game 2017"
            date="12.04.2017"
            comments={2}
            likes={4}
            withOpacity
            colorTag={'yellow'}
            tagContent={
              <React.Fragment>
                <Link className="pl-1 pr-2" key={'News & Updates'} to="/">
                  News & Updates
                </Link>
                <Link key={'X-box'} to="/">
                  X-box
                </Link>
              </React.Fragment>
            }
            urlCard={'/'}
            classesImg={
              'h-[195px] sm:h-[300px] md:h-[155px] lg:h-[210px] xl:h-[240px] 2xl:h-[255px]'
            }
            classesTitle={
              'tracking-normal sm:tracking-[0.5px] sm:pt-4 md:tracking-[0.6px] text-[1rem] sm:text-[0.86rem] md:pb-1 md:pt-3 xl:tracking-normal xl:text-[0.984rem] xl:pt-4 xl:pb-2 2xl:text-[1.125rem] 2xl:leading-[26px] text-purple'
            }
            classesPostInfo="most-discussed"
            classesTag="bottom-[11%]"
          />
          <Card
            imgSrc={AssassinCreed}
            title="Why Assassin’s Creed IV Was the Last Good Game from Ubisoft"
            date="11.30.2017"
            comments={0}
            likes={2}
            withOpacity
            colorTag={'orange'}
            classesTag="bottom-[11%]"
            tagContent={
              <React.Fragment>
                <Link className="pl-1 pr-2" key={'News & Updates'} to="/">
                  News & Updates
                </Link>
                <Link key={'X-box'} to="/">
                  X-box
                </Link>
              </React.Fragment>
            }
            urlCard={'/'}
            classes="pt-0"
            classesImg={
              'h-[195px] sm:h-[300px] md:h-[155px] lg:h-[210px] xl:h-[237px] 2xl:h-[255px]'
            }
            classesTitle={
              'tracking-normal sm:tracking-[0.5px] sm:pt-4 md:tracking-[0.6px] text-[1rem] sm:text-[0.86rem] md:pb-1 md:pt-3 xl:text-[0.984rem] xl:tracking-normal xl:pt-3 xl:leading-[22px] 2xl:text-[1.125rem] 2xl:leading-[26px] text-purple'
            }
            classesPostInfo="most-discussed"
          />
        </div>
      </div>
    </div>
  );
};

export default MostDiscussed;
