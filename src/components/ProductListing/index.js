import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { CartContext } from "../../contexts/CartContext";
import data from "../../data.json";
import Button from "../Button";
import CategoriesNavigation from "../CategoriesNavigation";
import About from "../About";
import "./ProductListing.css";

const ProductListing = () => {
  const history = useHistory();
  const { itemsInCart, setItemsInCart } = useContext(CartContext);
  const [productSlug, setProductSlug] = useState(
    history.location.pathname.split("/")[2]
  );
  const [product, setProduct] = useState();
  const [numberOfItems, setNumberOfItems] = useState(1);

  // Fetches product from json data
  useEffect(() => {
    const result = data.find((product) => product.slug === productSlug);
    setProduct(result);
  }, []);

  // if product hasn't been fetched yet show blank screen to avoid undefined errors
  if (!product) {
    return <div style={{ height: "100vh", width: "100vw" }}></div>;
  }

  // Adds item to cart
  const addToCart = () => {
    const itemToAdd = {
      product: product,
      quantity: numberOfItems,
      price: product.price,
    };
    const alreadyInCart = itemsInCart.find(
      (item) => item.product.name === product.name
    );

    // If item already exists in cart, update quantity of item, else add item
    if (alreadyInCart) {
      itemsInCart.map((item) =>
        item.product.name === product.name
          ? (item.quantity += numberOfItems)
          : ""
      );
    } else {
      setItemsInCart(itemsInCart.concat(itemToAdd));
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="product-page"
    >
      <>
        <button onClick={() => history.goBack()} className="back-button">
          Go Back
        </button>
        <section className="product-front-banner">
          <article className="product-image-container">
            <picture>
              <source
                srcSet={`../${product.image.desktop}`}
                media="(min-width: 1201px)"
              ></source>
              <source
                srcSet={`../${product.image.tablet}`}
                media="(min-width: 801px)"
              ></source>
              <source
                srcSet={`../${product.image.mobile}`}
                media="(min-width: 301px)"
              ></source>
              <img src={`../${product.image.desktop}`} alt={product?.name} />
            </picture>
          </article>
          <div className="product-listing">
            {product.new && <h5>NEW PRODUCT</h5>}
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <span>$ {product.price}</span>
            <div className="add-to-cart">
              <div className="item-quantity">
                <button
                  onClick={() =>
                    numberOfItems > 1 && setNumberOfItems(numberOfItems - 1)
                  }
                >
                  -
                </button>
                <input
                  onChange={({ target }) => setNumberOfItems(target.value)}
                  value={numberOfItems}
                />
                <button onClick={() => setNumberOfItems(numberOfItems + 1)}>
                  +
                </button>
              </div>
              <button onClick={addToCart} className="add-to-cart-button">
                ADD TO CART
              </button>
            </div>
          </div>
        </section>
        <section className="product-features-description">
          <article className="features">
            <h4>FEATURES</h4>
            <p>{product.features}</p>
          </article>
          <article className="in-the-box">
            <h4>IN THE BOX</h4>
            <ul>
              {product.includes.map((item) => (
                <li key={item.item}>
                  <span>x{item.quantity} </span>
                  {item.item}
                </li>
              ))}
            </ul>
          </article>
        </section>
        <section className="product-images">
          <div className="product-images-small">
            <picture>
              <source
                srcSet={`../${product.gallery.first.desktop}`}
                media="(min-width: 1201px)"
              ></source>
              <source
                srcSet={`../${product.gallery.first.tablet}`}
                media="(min-width: 801px)"
              ></source>
              <source
                srcSet={`../${product.gallery.first.mobile}`}
                media="(min-width: 301px)"
              ></source>
              <img
                src={`../${product.gallery.first.desktop}`}
                alt={product?.name}
              />
            </picture>
            <picture>
              <source
                srcSet={`../${product.gallery.second.desktop}`}
                media="(min-width: 1201px)"
              ></source>
              <source
                srcSet={`../${product.gallery.second.tablet}`}
                media="(min-width: 801px)"
              ></source>
              <source
                srcSet={`../${product.gallery.second.mobile}`}
                media="(min-width: 301px)"
              ></source>
              <img
                src={`../${product.gallery.second.desktop}`}
                alt={product?.name}
              />
            </picture>
          </div>
          <div className="product-images-large">
            <picture>
              <source
                srcSet={`../${product.gallery.third.desktop}`}
                media="(min-width: 1201px)"
              ></source>
              <source
                srcSet={`../${product.gallery.third.tablet}`}
                media="(min-width: 801px)"
              ></source>
              <source
                srcSet={`../${product.gallery.third.mobile}`}
                media="(min-width: 301px)"
              ></source>
              <img
                src={`../${product.gallery.third.desktop}`}
                alt={product?.name}
              />
            </picture>
          </div>
        </section>
        <section className="recommendations">
          <h3>YOU MAY ALSO LIKE</h3>
          <article className="recommendations-list">
            {product.others.map((product) => (
              <div key={product.slug} className="recommended-link">
                <div>
                  <picture>
                    <source
                      srcSet={`../${product.image.desktop}`}
                      media="(min-width: 1201px)"
                    ></source>
                    <source
                      srcSet={`../${product.image.tablet}`}
                      media="(min-width: 801px)"
                    ></source>
                    <source
                      srcSet={`../${product.image.mobile}`}
                      media="(min-width: 301px)"
                    ></source>
                    <img
                      src={`../${product.image.desktop}`}
                      alt={product?.name}
                    />
                  </picture>
                </div>
                <h5>{product.name}</h5>
                <Button
                  customClass="orangeButton"
                  href={`/products/${product.slug}`}
                />
              </div>
            ))}
          </article>
        </section>
      </>

      <CategoriesNavigation />
      <About />
    </motion.main>
  );
};

export default ProductListing;
