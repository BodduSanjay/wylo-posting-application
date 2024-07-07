import React from "react";
import { IoMdHome } from "react-icons/io";
import { CiSquarePlus } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <Link to="/">
          <IoMdHome size={30} />
        </Link>
        <Link to="/create">
          <CiSquarePlus size={30} />
        </Link>
        <Link to="/liked">
          <FaRegHeart size={30} />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
