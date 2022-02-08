import "./About.css";

// About section found at the bottom of nearly every page of the website
const About = () => {
  return (
    <section className="about">
      <article className="about-text">
        <h4>
          BRINGING YOU THE <span>BEST</span> AUDIO GEAR
        </h4>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high-end headphones, earphones, speakers and audio accessories. We
          have a large showroom and luxury demonstration rooms available for you
          to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equiptment.
        </p>
      </article>
      <div>
        <picture>
          <source
            srcSet="/shared/desktop/image-best-gear.jpg"
            media="(min-width: 1200px)"
          ></source>
          <source
            srcSet="/shared/tablet/image-best-gear.jpg"
            media="(min-width: 800px)"
          ></source>
          <source
            srcSet="/shared/mobile/image-best-gear.jpg"
            media="(min-width: 300px)"
          ></source>
          <img src="/shared/desktop/image-best-gear.jpg" alt="Best Gear" />
        </picture>
      </div>
    </section>
  );
};

export default About;
