import { Link } from "react-router-dom";
import "./Button.css";

// Reusable button component for app's different buttons
const Button = ({ customClass, href }) => {
  return (
    <Link to={href}>
      <button className={customClass}>SEE PRODUCT</button>
    </Link>
  );
};

export default Button;
