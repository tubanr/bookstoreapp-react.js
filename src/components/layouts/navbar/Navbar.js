import React, { useState } from "react";
import "./Navbar.styles.css";
import { Link } from "react-router-dom";
import { ReactComponent as Cart } from "../../../assets/cart.svg";
import { isLoggedIn, logout } from "../../../utils/Auth";

const Navbar = ({ darkTheme }) => {
  const [authenticated, setAuthenticated] = useState(isLoggedIn());
  const handleLogout = () => {
    logout();
    setAuthenticated(false);
  };

  return (
    <section
      className={
        darkTheme
          ? "background-dark relative"
          : "background-transparent" + " navbar-container"
      }
    >
      <div className="container flex justify-between align-center">
        <a href="#" className="logo">
          Book<span className="text-primary">worm</span>
        </a>

        <nav className="nav-links-container">
          <Link to="/" className="nav-links">
            Home
          </Link>
          <Link to="/books" className="nav-links">
            Books
          </Link>
          <a href="#category-section" className="nav-links">
            Categories
          </a>
          {authenticated ? (
            <>
              <a href="/order-tracking" className="nav-links">
                OrderTracking
              </a>
              <button className="nav-links" onClick={handleLogout}>
                Logout
              </button>
              <Link to="/cart" className="cart-link">
                {" "}
                <Cart />{" "}
              </Link>
            </>
          ) : (
            <>
              <Link to="/token" className="nav-links">
                Login
              </Link>
              <Link to="/signup" className="nav-links">
                Sign up
              </Link>
            </>
          )}
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
