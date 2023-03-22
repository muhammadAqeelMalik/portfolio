import React from "react";
import me from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
export default function about() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={me} />
          </div>
        </div>
        <div className="about_content">
          <div className="about_card">
            <article className="about_card">
              <h5>Experience</h5>
              <small>3+ year working</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
