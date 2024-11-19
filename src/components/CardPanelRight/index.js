import { Link } from "gatsby";
import React, { useState, useEffect } from "react";

const CardPanelRight = (props) => {
  const { srcImage ,title, category, price, previousPrice = "" } = props;
  const [imageSource, setImageSource] = useState('');

  useEffect(() => {
    import(`../../images/${srcImage}`).then(image => {
        setImageSource(image?.default || '');
    }).catch(() => setImageSource(''));
  },[srcImage]);

  const renderPreviousPrice = (price) => {
      if(!previousPrice) return;

      return <span className="line-through text-gray-500">${previousPrice}</span>
  }
  
  return (
    <React.Fragment>
      <div className="h-[150px] w-[264px] rounded-none overflow-hidden">
        {imageSource && (
            <Link to="/">
                <img
                    alt={srcImage}
                    className="h-full w-full scale-y-[120%] scale-x-[100%] translate-y-4"
                    src={imageSource}
                />
            </Link>
        )}
      </div>
      <div className="pt-4 flex flex-wrap font-roboto">
        <Link to="/" className="flex text-[15px] font-roboto">
          <h5 className="leading-[1.2rem] tracking-normal pr-3 font-medium">
            {title}
          </h5>
          <div className="font-medium flex gap-x-1">
          {renderPreviousPrice()}
          <span>${price}</span>
          </div>
        </Link>
        <div className="text-[15px] text-gray-400">
          <span>{category}</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardPanelRight;
