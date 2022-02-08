import { useEffect, useState } from "react";
import "./CartElements.css";

// Individual item in cart
const CartElements = ({ item, handlePriceChange }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [abbreviatedName, setAbbreviatedName] = useState("");

  // Abbreviates product name in cart
  useEffect(() => {
    const abbreviateProduct = (str) => {
      let temp = str.split(" ");
      return temp[0];
    };
    const result = abbreviateProduct(item.product.name);

    setAbbreviatedName(result);
  }, []);

  // Change quantity of product in cart
  const changeQuantity = (amount) => {
    if (amount === "increment") {
      setQuantity(quantity + 1);
      item.quantity = quantity + 1;
      handlePriceChange();
    } else if (amount === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
      item.quantity = quantity - 1;
      handlePriceChange();
    } else if (amount > 0) {
      setQuantity(amount);
      item.quantity = amount;
      handlePriceChange();
    }
  };

  return (
    <div className="cart-row">
      <img
        src={`/cart/image-${item.product.slug}.jpg`}
        alt={`${item.product.name}-img`}
      />{" "}
      <p>{abbreviatedName}</p>
      <div className="quantity">
        <button onClick={() => changeQuantity("decrement")}>-</button>
        <input
          value={quantity}
          onChange={({ target }) => changeQuantity(target.value)}
        />
        <button onClick={() => changeQuantity("increment")}>+</button>
      </div>
    </div>
  );
};

export default CartElements;
