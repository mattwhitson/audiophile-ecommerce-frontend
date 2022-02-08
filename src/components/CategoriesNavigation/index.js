import "./CategoriesNavigation.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// On page navigation section that allows users to easily navigate to different product pages (i.e. speakers, headphones, etc.) (also used as mobile navigation)
const CategoriesNavigation = ({ handleClose }) => {
  return (
    <div className="content">
      <article className="categories">
        <div className="category" onClick={handleClose}>
          <Link className="category-thumbnail" to="/headphones">
            <motion.img
              whileHover={{
                scale: 1.2,
                transition: { ease: "easeInOut", duration: 0.5 },
              }}
              src="/shared/desktop/image-category-thumbnail-headphones.png"
              alt="headphones-thumbnail"
            />
          </Link>
          <h4>Headphones</h4>
          <div className="shop-link">
            <Link to="/headphones">SHOP</Link>
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.322 1l5 5-5 5"
                stroke="#D87D4A"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="category" onClick={handleClose}>
          <Link className="category-thumbnail" to="/speakers">
            <motion.img
              whileHover={{
                scale: 1.2,
                transition: { ease: "easeInOut", duration: 0.5 },
              }}
              src="/shared/desktop/image-category-thumbnail-speakers.png"
              alt="headphones-thumbnail"
            />
          </Link>
          <h4>Speakers</h4>
          <div className="shop-link">
            <Link to="/speakers">SHOP</Link>
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.322 1l5 5-5 5"
                stroke="#D87D4A"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="category" onClick={handleClose}>
          <Link className="category-thumbnail" to="/earphones">
            <motion.img
              whileHover={{
                scale: 1.2,
                transition: { ease: "easeInOut", duration: 0.5 },
              }}
              src="/shared/desktop/image-category-thumbnail-earphones.png"
              alt="headphones-thumbnail"
            />
          </Link>
          <h4>Earphones</h4>
          <div className="shop-link">
            <Link to="/earphones">SHOP</Link>
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.322 1l5 5-5 5"
                stroke="#D87D4A"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CategoriesNavigation;
