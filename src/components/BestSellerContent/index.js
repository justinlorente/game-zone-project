import React from "react";
import { Link } from "gatsby";
import CardPanelRight from "../CardPanelRight"
import DataBestSellerContent from "../../data/bestSellerContentData.json"

const BestSellerContent = () => {

  const renderCardPanelRight = () => {
    return DataBestSellerContent.map((d) => {
      return(
        <div key={d.id}>
          <CardPanelRight srcImage={d.img} title={d.title} price={d.price} category={d.category} previousPrice={d.previousPrice} />
        </div>
      ) 
    })
  }

  return (
    <React.Fragment>
      <div className="h-full w-full overflow-y-auto touch-auto no-scrollbar block font-roboto">
        <div className="pt-12 text-center pb-6">
          <h4 className="text-[22px] font-semibold text-gray-900 tracking-normal">
            Our Bestsellers
          </h4>
        </div>
        <div className="flex flex-col gap-y-5 pb-16">
          {renderCardPanelRight()}
        </div>
      </div>
      <div className="h-[50px] w-full bg-green-600 flex hover:bg-green-500 duration-300 absolute right-0 bottom-0">
        <Link
          to="/"
          className="h-full w-full text-center pt-4 text-white font-bold font-roboto text-xs"
        >
          SALE
        </Link>
      </div>
    </React.Fragment>
  );
};

export default BestSellerContent;
