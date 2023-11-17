import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";
export default function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_detail">
              {/* <BsPatchCheckFill /> */}
              <BsPatchCheckFill className="experience_detail_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail_icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail_icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail_icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail_icon" />
              <div>
                <h4>React Native</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail_icon" />
              <div>
                <h4>Flutter</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail_icon" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail_icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail_icon" />
              <div>
                <h4>Mongodb</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail_icon" />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail_icon" />
              <div>
                <h4>.Net</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail_icon" />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
