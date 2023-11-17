import React from "react";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";
import "./testinomial.css";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function Testinomial() {
  const data = [
    {
      avatar: avatar1,
      name: "Tina Snow",
      review:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis illo eligendi minus provident consequuntur, earum autem laudantium vel harum alias ut corrupti quasi, ad ea ex, temporibus unde illum nesciunt.",
    },
    {
      avatar: avatar2,
      name: "Rohan",
      review:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis illo eligendi minus provident consequuntur, earum autem laudantium vel harum alias ut corrupti quasi, ad ea ex, temporibus unde illum nesciunt.",
    },
    {
      avatar: avatar4,
      name: "Zayln",
      review:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis illo eligendi minus provident consequuntur, earum autem laudantium vel harum alias ut corrupti quasi, ad ea ex, temporibus unde illum nesciunt.",
    },
  ];

  return (
    <section id="testinomial">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        // navigation

        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        className="container testimonials_container"
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client_avatar">
                <img src={avatar} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
