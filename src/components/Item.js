import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const addToCart = () => {
    setIsInCart(!isInCart); // Toggle the previous state
  };

  const itemClass = isInCart ? "in-cart" : "item";
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";
  const buttonColor = isInCart ? "magenta" : "yellow";
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className="add"
        style={{ backgroundColor: buttonColor }}
        onClick={addToCart}
      >
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
