import React from "react";
import CTA from "./CTA";
import Me from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";
import "./header.css";
export default function Header() {
  return (
    <>
      <header>
        <div className="container header_container">
          <h5>Hello I am</h5>
          <h1>Muhammad Aqeel Malik</h1>
          <h5 className="text-light">FullStack Developer</h5>
          <CTA />
          <HeaderSocial />
          <div className="me">
            <img src={Me} />
          </div>
          <a href="#contact" className="scroll_down">
            Scroll Down
          </a>
        </div>
      </header>
    </>
  );
}
