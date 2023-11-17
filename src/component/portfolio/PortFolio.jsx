import React from "react";
import Img1 from "../../assets/portfolio1.jpg";
import Img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.png";
import ing6 from "../../assets/portfolio6.jpg";
import "./portfolio.css";
export default function PortFolio() {
  const data = [
    {
      id: 1,
      image: Img1,
      title: "Crypto Currency Dasboard",
      github: "https://github.com",
      demo: "https://dribbble.com/",
    },
    {
      id: 2,
      image: Img2,
      title: "Chart Template",
      github: "https://github.com",
      demo: "https://dribbble.com/",
    },
    {
      id: 3,
      image: img3,
      title: "Maintaining Task",
      github: "https://github.com",
      demo: "https://dribbble.com/",
    },
    {
      id: 4,
      image: img4,
      title: "Agency Mark",
      github: "https://github.com",
      demo: "https://dribbble.com/",
    },
    {
      id: 5,
      image: img5,
      title: "Booking App",
      github: "https://github.com",
      demo: "https://dribbble.com/",
    },
    {
      id: 6,
      image: ing6,
      title: "Resturantant",
      github: "https://github.com",
      demo: "https://dribbble.com/",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ image, title, github, demo, id }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a target="_blank" className="btn btn-primary" href={demo}>
                  Demo Link
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
