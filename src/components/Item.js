import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  const itemStatus = inCart ? "in-cart" : ""
  const cartButtonTxt = inCart ? "Remove From Cart" : "Add to Cart"
  const buttonBkg = inCart ? "remove" : "add"

  const handleCartClick = () => setInCart(inCart => !inCart)

  return (
    <li className={itemStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        onClick={handleCartClick}
        className={buttonBkg}
      >{cartButtonTxt}</button>
    </li>
  );
}

export default Item;
