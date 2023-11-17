import React from "react";
import me from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFolder2 } from "react-icons/bs";
import "./about.css";
export default function about() {
  return (
    <section id="about" style={{}}>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={me} />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icons" />
              <h5>Experience</h5>
              <small>3+ year working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icons" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about_card">
              <BsFolder2 className="about_icons" />
              <h5>Project</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            nobis blanditiis perferendis, sequi ad quas odit, debitis quasi
            consectetur enim repudiandae saepe quisquam, nostrum unde
            voluptatem? Eligendi ipsa ullam ea.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let`s Talk
          </a>
        </div>
      </div>
    </section>
  );
}
