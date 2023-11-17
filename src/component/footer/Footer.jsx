import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import "./footer.css";
export default function Footer() {
  return (
    <footer>
      <a href="" className="footer__logo">
        Logo
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Testinomials</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="footer__setion">
        <a href="https://facebook.com">
          <CiFacebook></CiFacebook>
        </a>
        <a href="https://facebook.com">
          <FaInstagram></FaInstagram>
        </a>
        <a href="https://facebook.com">
          <AiFillLinkedin></AiFillLinkedin>
        </a>
      </div>
    </footer>
  );
}
