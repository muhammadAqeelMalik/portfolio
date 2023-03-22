import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
export default function HeaderSocial() {
  return (
    <div className="header_social">
      <a
        href="https://www.linkedin.com/in/muhammad-aqeel-malik-a6749a221"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/muhammadAqeelMalik" target="_blank">
        <AiFillGithub />
      </a>
      <a href="https://linkedin.com" target="_blank">
        <AiFillFacebook />
      </a>
    </div>
  );
}
