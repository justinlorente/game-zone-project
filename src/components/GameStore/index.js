import React from 'react';
import ProductCart from '../ProductCard';
import ProductsData from '../../data/ProductCardData.json';

const GameStore = () => {
  const renderProductsCard = () => {
    return ProductsData.map((p) => {
      return (
        <ProductCart
          key={p.id}
          url={p.url}
          title={p.title}
          srcImg={p.image}
          lowestPrice={p.lowestPrice}
          highestPrice={p.highestPrice}
        />
      );
    });
  };

  return (
    <div className="Game-store-section">
      <div className="container mx-auto w-full px-4 xl:w-[1187px]">
        <h2 className="font-roboto tracking-tight text-purple font-bold text-4xl pt-[3.7rem] pb-8">
          Game Store
          <span className="text-green-custom font-light select-none pl-2">
            \
          </span>
        </h2>
        <div className="Product-container">{renderProductsCard()}</div>
      </div>
    </div>
  );
};

export default GameStore;
