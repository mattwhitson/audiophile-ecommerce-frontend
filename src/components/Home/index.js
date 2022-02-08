import { motion } from "framer-motion";
import data from "../../data.json";
import About from "../About";
import Button from "../Button";
import FeaturedProducts from "../FeaturedProducts";
import "./Home.css";

// Home page
const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      <section className="front-banner">
        <article className="front-product">
          <h4>NEW PRODUCT</h4>
          <h1>{data[3].name}</h1>
          <p className="front-description">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <div>
            <Button
              customClass="orangeButton"
              href="/products/xx99-mark-two-headphones"
            />
          </div>
        </article>

        <picture className="front-banner-img">
          <source
            srcSet="./home/desktop/image-hero.jpg"
            media="(min-width: 1200px)"
          ></source>
          <source
            srcSet="./home/tablet/image-header.jpg"
            media="(min-width: 800px)"
          ></source>
          <source
            srcSet="./home/mobile/image-header.jpg"
            media="(min-width: 200px)"
          ></source>
          <img src=".home/desktop/image-hero.jpg" alt="" />
        </picture>
      </section>
      <FeaturedProducts />
      <About />
    </motion.main>
  );
};

export default Home;
