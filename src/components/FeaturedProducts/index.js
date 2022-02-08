import Button from "../Button";
import CategoriesNavigation from "../CategoriesNavigation";
import "./FeaturedProducts.css";

// Featured products that are shown on the front page
const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <CategoriesNavigation />
      <article className="featured-speaker">
        <picture>
          <source
            srcSet="./home/desktop/image-speaker-zx9.png"
            media="(min-width: 1200px)"
          ></source>
          <source
            srcSet="./home/tablet/image-speaker-zx9.png"
            media="(min-width: 800px)"
          ></source>
          <source
            srcSet="./home/mobile/image-speaker-zx9.png"
            media="(min-width: 300px)"
          ></source>
          <img src="./home/desktop/image-speaker-zx9.png" alt="ZX9 Speaker" />
        </picture>
        <svg
          width="944"
          height="944"
          xmlns="http://www.w3.org/2000/svg"
          className="circles"
        >
          <g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".202">
            <circle cx="472" cy="472" r="235.5" />
            <circle cx="472" cy="472" r="270.5" />
            <circle cx="472" cy="472" r="471.5" />
          </g>
        </svg>
        <div className="featured-speaker-info">
          <h2>
            ZX9 <br />
            SPEAKER
          </h2>
          <p>
            Upgrade to premium speakers that are phenomenally built
            <br /> to deliver truly remarkable sound.
          </p>
          <Button customClass={"blackButton"} href={"/products/zx9-speaker"} />
        </div>
      </article>
      <article className="featured-speaker-two">
        <picture>
          <source
            srcSet="./home/desktop/image-speaker-zx7.jpg"
            media="(min-width: 1200px)"
          ></source>
          <source
            srcSet="./home/tablet/image-speaker-zx7.jpg"
            media="(min-width: 800px)"
          ></source>
          <source
            srcSet="./home/mobile/image-speaker-zx7.jpg"
            media="(min-width: 300px)"
          ></source>
          <img src="./home/desktop/image-speaker-zx7.jpg" alt="ZX9 Speaker" />
        </picture>
        <div className="featured-speaker-two-info">
          <h2>ZX7 SPEAKER</h2>
          <Button customClass={"whiteButton"} href={"/products/zx7-speaker"} />
        </div>
      </article>
      <article className="featured-product-three">
        <div>
          <picture>
            <source
              srcSet="./home/desktop/image-earphones-yx1.jpg"
              media="(min-width: 1200px)"
            ></source>
            <source
              srcSet="./home/tablet/image-earphones-yx1.jpg"
              media="(min-width: 800px)"
            ></source>
            <source
              srcSet="./home/mobile/image-earphones-yx1.jpg"
              media="(min-width: 300px)"
            ></source>
            <img
              src="./home/desktop/image-earphones-yx1.jpg"
              alt="ZX9 Speaker"
            />
          </picture>
        </div>
        <div className="featured-speaker-three-info">
          <h2>YX1 EARPHONES</h2>{" "}
          <Button customClass={"whiteButton"} href="/products/yx1-earphones" />
        </div>
      </article>
    </section>
  );
};

export default FeaturedProducts;
