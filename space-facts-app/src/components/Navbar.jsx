import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        🏠 Home
      </Link>

      <Link to="/about" className="nav-link">
        ℹ️ About
      </Link>
    </nav>
  );
};

export default Navbar;
