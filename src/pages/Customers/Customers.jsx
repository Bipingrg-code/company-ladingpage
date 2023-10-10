import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { clients } from "../../constants";

export function Customers() {
  const settings = {
    infinite: true, // Enable infinite loop
    speed: 2000, // Slide transition speed (2 seconds)
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval (5 seconds)
  };

  return (
    <section className="bg-secondaryLight h-20">
      <div className="container mx-auto p-4">
        <Slider {...settings}>
          {clients.map((client) => (
            <div key={client.id}>
              <img
                src={client.src}
                alt={client.alt}
                height={80}
                width={80}
                className="mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
export default Customers;
