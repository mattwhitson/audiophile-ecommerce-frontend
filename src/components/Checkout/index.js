import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnimatePresence, motion } from "framer-motion";
import * as yup from "yup";
import "./Checkout.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import SuccessfulPurcahse from "../SuccessfulPurchase";

const Checkout = () => {
  const [paymentOption, setPaymentOption] = useState();
  const [totalCost, setTotalCost] = useState();
  const [purchaseSuccessful, setPurchaseSuccessful] = useState(false);
  const { itemsInCart, setItemsInCart } = useContext(CartContext);
  const history = useHistory();

  // Calculates current price of items in cart
  useEffect(() => {
    let price = 0;
    itemsInCart.map((item) => (price += item.price * item.quantity));
    setTotalCost(price);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Validation schema for react-hook-form
  const validationSchema = yup.object({
    name: yup.string().min(4).required("Name is required."),
    email: yup.string().email().required("Email is required."),
    phone: yup.string().required("Phone number is required."),
    address: yup.string().required("Address is required."),
    zip: yup.string().required("ZIP Code is required."),
    city: yup.string().required("City is required."),
    country: yup.string().required("Country is required."),
  });

  // Initalizing error handling, input registration, form submission handling and the yup resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const validatePurchase = () => {
    setPurchaseSuccessful(true);
  };

  const closePurchaseModal = () => {
    setPurchaseSuccessful(false);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="checkout-container"
    >
      <AnimatePresence>
        {purchaseSuccessful && (
          <SuccessfulPurcahse
            handleClose={closePurchaseModal}
            grandTotal={totalCost * 0.12 + 50 + totalCost}
          />
        )}
      </AnimatePresence>
      <button onClick={() => history.goBack()} className="back-button">
        Go back
      </button>
      <form className="checkout-form" onSubmit={handleSubmit(validatePurchase)}>
        <div className="checkout-left">
          <h4>Checkout</h4>
          <section className="billing-details">
            <h5>BILLING DETAILS</h5>

            <article className="input-section">
              <div className="input-info">
                <label>Name</label>
                {errors.name && (
                  <label className="input-error">{errors.name.message}</label>
                )}
              </div>
              <input {...register("name")} type="text" />
            </article>
            <article className="input-section">
              <div className="input-info">
                <label>Email</label>
                {errors.email && (
                  <label className="input-error">{errors.email.message}</label>
                )}
              </div>
              <input {...register("email")} type="email" />
            </article>
            <article className="input-section">
              <div className="input-info">
                <label>Phone Number</label>
                {errors.number && (
                  <label className="input-error">{errors.number.message}</label>
                )}
              </div>
              <input {...register("phone")} type="tel" />
            </article>
          </section>
          <section className="shipping-info">
            <h5>SHIPPING INFO</h5>
            <article className="address-section">
              <div className="input-info">
                <label>Address</label>
                {errors.address && (
                  <label className="input-error">
                    {errors.address.message}
                  </label>
                )}
              </div>
              <input {...register("address")} type="text" />
            </article>
            <article className="input-section">
              <div className="input-info">
                <label>ZIP Code</label>
                {errors.zip && (
                  <label className="input-error">{errors.zip.message}</label>
                )}
              </div>
              <input {...register("zip")} type="text" />
            </article>
            <article className="input-section">
              <div className="input-info">
                <label>City</label>
                {errors.city && (
                  <label className="input-error">{errors.city.message}</label>
                )}
              </div>
              <input {...register("city")} type="text" />
            </article>
            <article className="input-section">
              <div className="input-info">
                <label>Country</label>
                {errors.country && (
                  <label className="input-error">
                    {errors.country.message}
                  </label>
                )}
              </div>
              <input {...register("country")} type="text" />
            </article>
          </section>
          <section className="payment-details">
            <h5>PAYMENT DETAILS</h5>
            <div className="payment-details-container">
              <h6>Payment Method</h6>
              <div className="payment-selection">
                <div
                  className={`payment-option ${
                    paymentOption === "e-Money" && "selected"
                  }`}
                  onClick={() => setPaymentOption("e-Money")}
                >
                  <div className="circle-selector"></div>e-Money
                </div>
                <div
                  className={`payment-option ${
                    paymentOption === "Cash on Delivery" && "selected"
                  }`}
                  onClick={() => setPaymentOption("Cash on Delivery")}
                >
                  <div className="circle-selector"></div>
                  Cash on Delivery
                </div>
              </div>
            </div>
            <div className="e-money-details">
              <article className="input-section">
                <label>e-Money Number</label>
                <input type="text" />
              </article>
              <article className="input-section">
                <label>e-Money Pin</label>
                <input type="text" />
              </article>
            </div>
          </section>
        </div>
        <div className="checkout-right">
          <h5>SUMMARY</h5>
          {itemsInCart.length > 0 &&
            itemsInCart.map((item) => (
              <div key={item.product.slug} className="cart-row">
                <img
                  src={`/cart/image-${item.product.slug}.jpg`}
                  alt={`${item.product.name}-img`}
                />{" "}
                <div className="product-basic-info">
                  <p>{item.product.name}</p>
                  <span>${item.product.price}</span>
                </div>
                <p className="item-quantity">x{item.quantity}</p>
              </div>
            ))}
          <div className="checkout-total">
            <div>
              <span>TOTAL</span>
              <span className="cost-display">${totalCost}</span>
            </div>
            <div>
              <span>SHIPPING</span>
              <span className="cost-display">$50</span>
            </div>
            <div>
              <span>VAT</span>
              <span className="cost-display">
                ${Math.round(totalCost * 0.12 * 100) / 100}
              </span>
            </div>
            <div>
              <span>GRAND TOTAL</span>
              <span className="grand-total">
                ${totalCost * 0.12 + 50 + totalCost}
              </span>
            </div>
          </div>
          <button className="pay-button" type="submit">
            CONTINUE &amp; PAY
          </button>
        </div>
      </form>
    </motion.main>
  );
};

export default Checkout;
