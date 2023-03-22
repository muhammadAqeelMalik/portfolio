import React, { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { BsFillBookFill } from "react-icons/bs";
import { AiFillCustomerService } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import "./navbar.css";
export default function Navbar() {
  const [ActiveNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        onClick={() => setActiveNav("#")}
        className={ActiveNav === "#" ? "active" : ""}
        href="#"
      >
        <BiHomeAlt />
      </a>
      <a
        onClick={() => setActiveNav("#about")}
        href="#about"
        className={ActiveNav === "#about" ? "active" : ""}
      >
        <FaUserAlt />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={ActiveNav === "#experience" ? "active" : ""}
      >
        <BsFillBookFill />
      </a>
      <a
        href="#service"
        onClick={() => setActiveNav("#service")}
        className={ActiveNav === "#service" ? "active" : ""}
      >
        <AiFillCustomerService />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={ActiveNav === "#contact" ? "active" : ""}
      >
        <MdOutlineMessage />
      </a>
    </nav>
  );
}
