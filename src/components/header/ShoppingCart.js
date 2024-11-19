import React from "react";

const ShoppingCart = (props) => {
  const { isOpen, setIsOpen } = props;

  const closeShoppingCart = () => {
    setIsOpen(false);
  }

  return (
    <div className={`Shoppingcart ${isOpen? "Show" : "Hide"}`}>
      <span>
        <i className="fal fa-shopping-bag text-5xl px-12 text-white" />
        <p className="pt-5 text-sm text-gray-200">No products in the cart.</p>
      </span>
      <button onClick={closeShoppingCart}>
        <i className="fal fa-times text-sm Close-btn" />
      </button>
    </div>
  );
};

export default ShoppingCart;
