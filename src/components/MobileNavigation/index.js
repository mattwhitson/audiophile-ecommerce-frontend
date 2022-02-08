import { motion } from "framer-motion";
import CategoriesNavigation from "../CategoriesNavigation";
import "./MobileNavigation.css";

// Params for the opening/closing of the navigation modal
const variants = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 0, scale: 0.9 },
};

// Params for the opening/closing of the backdrop
const darkBackgroundVariants = {
  open: { opacity: 0.75 },
  closed: { opacity: 0 },
};

// Modal for mobile navigation between different categories
const MobileNavigation = ({ handleClose }) => {
  return (
    <>
      <motion.div
        initial={"closed"}
        animate={"open"}
        exit={"closed"}
        variants={darkBackgroundVariants}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="dark-background"
        key="dark-background"
        onClick={handleClose}
      ></motion.div>
      <motion.nav
        initial={"closed"}
        animate={"open"}
        exit={"closed"}
        variants={variants}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="mobile-nav"
      >
        <CategoriesNavigation handleClose={handleClose} />
      </motion.nav>
    </>
  );
};

export default MobileNavigation;
