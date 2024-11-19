import React from 'react';
import FrontPage from '../components/FrontPage';
import Layout from '../components/layout';
import Clancys from '../images/front-page/front-page-clancys.jpg';
import VideoMask from '../images/video.jpg';
import VideoImg from '../images/audio-image.jpg';
import Sliders from '../components/Slider';
import Video from '../components/Video';
import AudioPlayerSection from '../components/AudioPlayer';
import Progressbars from '../components/Progressbars';
import Testimonials from '../components/Testimonials';
import Counters from '../components/Counter';
import MapSection from '../components/MapSection';
import Action from '../components/Action';

const Shortcodes = () => {
  return (
    <Layout>
      <div className="md:pt-[4.5rem] xl:pt-[4.5rem] pt-[3.4rem]">
        <FrontPage
          srcImg={Clancys}
          title={'Shortcodes'}
          redirectTitle={'Home'}
          redirectUrl={'/'}
        />
        <div>{/* waiting for component*/}</div>
        <div>
          <div className="Shortcodes">
            <div className="container mx-auto">
              <div className="two-columns-container">
                <div className="w-full md:w-[50%] pr-6">
                  <Video classes="Video" srcImg={VideoMask} />
                </div>
                <div className="w-full md:w-[50%]">
                  <Sliders />
                </div>
              </div>
              <hr className="text-gray-300" />
              <div className="w-full">
                <div className="two-columns-container py-10">
                  <AudioPlayerSection
                    classes="AudioPlayer"
                    srcImg={VideoImg}
                    title="Insert Audio Title Here"
                  />
                  <Progressbars />
                </div>
              </div>
              <div className="w-full">
                <hr className="text-gray-300" />
                <div className="counters-container">
                  <Counters />
                </div>
              </div>
              <hr className="text-gray-300" />
              <div className="testimonial-text">Testimonials</div>
            </div>
          </div>
          <div className="Testimonials-container">
            <Testimonials />
          </div>
          <div className="Shortcodes">
            <div className="container mx-auto">
              <div className="w-full flex flex-col md:flex-row py-6">
                <MapSection />
              </div>
              <div className="w-full h-full flex flex-col md:flex-row py-10">
                <Action />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shortcodes;
