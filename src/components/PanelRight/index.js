import React, { useState } from 'react';
import PanelRightTabs from '../PanelRightTabs';
import ContentPanel from '../ContentPanel';
import { Helmet } from 'react-helmet';
import BestSellerContent from '../BestSellerContent';

const PanelRight = (props) => {
  const { items } = props;
  const [contPanel, setContPanel] = useState(false);

  const handleOpenContentPanel = (openPanel, onClick) => () => {
    onClick && onClick();
    if (!openPanel) return;
    window.scrollTo(0, 100);
    setContPanel(true);
  };
  const handleCloseContentPanel = () => {
    setContPanel(false);
  };

  const translateContentPanel = () => {
    if (!contPanel) return 'translate-x-80';

    return '-translate-x-0';
  };

  const renderTabsPanel = () => {
    return items.map((i) => {
      let disableHover = false;
      if (i.openPanel && contPanel) disableHover = true;
      return (
        <PanelRightTabs
          key={i.descriptionTabText}
          descriptionTabText={i.descriptionTabText}
          disableHover={disableHover}
          onClick={handleOpenContentPanel(i.openPanel, i.onClick)}
        >
          {i.tabItem}
        </PanelRightTabs>
      );
    });
  };

  return (
    <React.Fragment>
      <Helmet
        bodyAttributes={{
          class: contPanel ? 'fixed overflow-y-scroll' : '',
        }}
      />
      <div
        className={`relative z-50 h-full ${
          contPanel ? 'PanelRight-showBefore' : 'before:opacity-0'
        }`}
      >
        <div
          className={`fixed h-full top-[0px] right-0 ${translateContentPanel()} duration-500 flex flex-row items-end Content-panel`}
        >
          <div className="absolute top-[43%] sm:top-[26%] md:top-[28%] lg:top-[39%] xl:top-[33.3%] 2xl:top-[40%] z-45 right-[95%] flex flex-col gap-[2px] Right-tabs font-roboto">
            {renderTabsPanel()}
          </div>
          <ContentPanel closeContent={handleCloseContentPanel}>
            <BestSellerContent />
          </ContentPanel>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PanelRight;
