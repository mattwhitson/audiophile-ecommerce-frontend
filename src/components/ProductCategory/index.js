import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../Button";
import About from "../About";
import CategoriesNavigation from "../CategoriesNavigation";
import data from "../../data.json";
import "./ProductCategory.css";

// Reusable component to display the items of each category of products. Items are fetched based on the route name
const ProductCategory = () => {
  const history = useHistory();
  const [category, setCategory] = useState(
    history.location.pathname.split("/")[1]
  );
  const [products, setProducts] = useState([]);

  // Fetch data based on route name
  useEffect(() => {
    const result = data.filter((data) => data.category === category);
    setProducts(result.reverse());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      <div className="product-name-banner">
        <h1>{category}</h1>
      </div>
      <section className="products">
        {products.map((product, index) => (
          <article key={product.id} className="product">
            <div className="product-image">
              <picture className="image">
                <source
                  srcSet={product.categoryImage.desktop}
                  media="(min-width: 1200px)"
                ></source>
                <source
                  srcSet={product.categoryImage.tablet}
                  media="(min-width: 800px)"
                ></source>
                <source
                  srcSet={product.categoryImage.mobile}
                  media="(min-width: 300px)"
                ></source>
                <img src={product.categoryImage.desktop} alt={product.name} />
              </picture>
            </div>
            <div className="product-info-container">
              <div className="product-info">
                {index === 0 && <h4>NEW PRODUCT</h4>}
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <Button
                  customClass="orangeButton"
                  href={`/products/${product.slug}`}
                />
              </div>
            </div>
          </article>
        ))}
      </section>
      <CategoriesNavigation />
      <About />
    </motion.main>
  );
};

export default ProductCategory;
