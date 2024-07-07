import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dnm4q4bgp/image/upload/v1720258808/5jgL1tlHpDHeeSYpoqVH5JNzTc_anzbyx.avif"
            alt="Logo"
            className="logo-image"
          />
        </Link>
      </div>
      <nav className="nav">
        <Link to="/">Posts</Link>
        <Link to="/create">Create Post</Link>
        <Link to="/liked">Liked Posts</Link>
      </nav>
    </header>
  );
};

export default Header;
