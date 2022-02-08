import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CartContext } from "../../contexts/CartContext";
import "./SuccessfulPurchase.css";
import { Link } from "react-router-dom";

const darkBackgroundVariants = {
  open: { opacity: 0.75 },
  closed: { opacity: 0 },
};

const variants = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 0, scale: 0.9 },
};

const pathVariant = {
  closed: {
    pathLength: 0,
  },
  open: {
    pathLength: 1,
    transition: {
      duration: 0.75,
      delay: 0.25,
      ease: "easeInOut",
    },
  },
};

const SuccessfulPurcahse = ({ handleClose, grandTotal }) => {
  const { itemsInCart } = useContext(CartContext);

  const [abbreviatedName, setAbbreviatedName] = useState("");

  // Abbreviates product name in cart
  useEffect(() => {
    const abbreviateProduct = (str) => {
      let temp = str.split(" ");
      return temp[0];
    };
    const result = abbreviateProduct(itemsInCart[0].product.name);

    setAbbreviatedName(result);
  }, []);

  console.log(itemsInCart);
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
      <motion.section
        initial={"closed"}
        animate={"open"}
        exit={"closed"}
        variants={variants}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="purchase-successful-container"
      >
        <div className="svg-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="checkmark-svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <motion.path
              initial={"closed"}
              animate={"open"}
              exit={"closed"}
              variants={pathVariant}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2>
          THANK YOU
          <br /> FOR YOUR ORDER
        </h2>
        <p>You will receive an email confirmation shortly.</p>
        <div className="bill-simplified">
          <div className="items-purchased">
            <div className="featured-item-purchased">
              <img
                src={`/cart/image-${itemsInCart[0].product.slug}.jpg`}
                alt={`${itemsInCart[0].product.name}-img`}
              />{" "}
              <div className="name-cost">
                <p>{abbreviatedName}</p>
                <span>${itemsInCart[0].price}</span>
              </div>
              <p className="quantity-of-item">x{itemsInCart[0].quantity}</p>
            </div>
            <div className="other-items">
              {itemsInCart.length > 1 && (
                <span>and {itemsInCart.length - 1} other item(s)</span>
              )}
            </div>
          </div>
          <div className="grand-total-items">
            GRAND TOTAL
            <p>{grandTotal}</p>
          </div>
        </div>
        <Link to="/">
          <button className="return-home-button">BACK TO HOME</button>
        </Link>
      </motion.section>
    </>
  );
};

export default SuccessfulPurcahse;
