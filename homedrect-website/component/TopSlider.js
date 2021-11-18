import React from "react";
import style from "../styles/Home.module.css";
//Owl Carousel Libraries and Module
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from 'next/link'

//Owl Carousel Settings
const options = {
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 5000,
  slideBy: 4,
  navText: [
    "<img src='img/left-arrow.png'>",
    "<img src='img/right-arrow.png'>",
  ],
  responsive: {
    0: {
      items: 3,
      nav: false,
      loop: true,
    },

    600: {
      items: 5,
      nav: false,
      loop: true,
    },

    1000: {
      items: 9,
      nav: true,
      dots: false,
      loop: true,
      margin: 10,
    },
  },
};
const SimpleSlider = () => {
  return (
    <div class="container">
      <div class="row justify-content-center step_2">
        <div class="col-md-12">
          <OwlCarousel className="owl-theme" {...options}>
            <div class="item">
              <div class="how-wrks-inn">
                <img src="img/pic1.png" alt="" />
                <h5> <Link href="/product" style={{ color : 'red' }}> grocery & staples</Link></h5>
              </div>
            </div>
            <div class="item">
              <div class="how-wrks-inn">
                <img src="img/pic2.png" alt="" />
                <h5>vegetable & fruits</h5>
              </div>
            </div>
            <div class="item">
              <div class="how-wrks-inn">
                <img src="img/pic3.png" alt="" />
                <h5>personal care</h5>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};
export default SimpleSlider;
