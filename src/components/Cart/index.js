import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import CartElements from "../CartElements";
import "./Cart.css";

// Params for animation of the cart modal
const variants = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 0, scale: 0.9 },
};

// Params for animation of the backdrop of modal
const darkBackgroundVariants = {
  open: { opacity: 0.75 },
  closed: { opacity: 0 },
};

// Modal for cart
const Cart = ({ handleClose }) => {
  const [totalCost, setTotalCost] = useState();
  const { itemsInCart, setItemsInCart } = useContext(CartContext);

  // Calculates cost of items in cart when the cart is first opened
  useEffect(() => {
    let price = 0;
    itemsInCart.map((item) => (price += item.price * item.quantity));
    setTotalCost(price);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Updates current cost of items after there is a quantity change
  const handlePriceChange = () => {
    let price = 0;
    itemsInCart.map((item) => (price += item.price * item.quantity));
    setTotalCost(price);
  };

  return (
    <>
      <motion.div
        initial={"closed"}
        animate={"open"}
        exit={"closed"}
        variants={darkBackgroundVariants}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="backdrop"
        key="backdrop"
        onClick={handleClose}
      ></motion.div>
      <motion.article
        initial={"closed"}
        animate={"open"}
        exit={"closed"}
        variants={variants}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="cart-container"
      >
        <div className="cart-top">
          <h6>Cart ({itemsInCart.length})</h6>
          <button onClick={() => setItemsInCart([])}>Remove all</button>
        </div>
        <div>
          {itemsInCart.length > 0 &&
            itemsInCart.map((item) => (
              <CartElements
                key={item.product.slug}
                item={item}
                handlePriceChange={handlePriceChange}
              />
            ))}
          {itemsInCart.length > 0 && (
            <>
              <div className="total">
                <h6>Total</h6>
                <p>${totalCost}</p>
              </div>
              <Link to="/checkout" onClick={handleClose}>
                <button className="checkout-button">CHECKOUT</button>
              </Link>
            </>
          )}
          {!itemsInCart.length && (
            <div className="empty-cart">Cart is empty...</div>
          )}
        </div>
      </motion.article>
    </>
  );
};

export default Cart;
