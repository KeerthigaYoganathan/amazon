import React from "react";
import Banner1 from "../../Assets/images/banner_bacground_1.jpg";
import Banner2 from "../../Assets/images/banner_background_2.jpg";
import Banner3 from "../../Assets/images/banner_background_3.jpg";
import Banner4 from "../../Assets/images/banner_background_4.jpg";
import Banner5 from "../../Assets/images/banner_background_5.jpg";
import Banner6 from "../../Assets/images/banner_background_6.jpg";
import Banner7 from "../../Assets/images/banner_background_7.jpg";

const Banner = () => {
  return (
    <>
      <section className="banner-sec">
        <div className="banner-container">
          <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Banner1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Banner2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Banner3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Banner4} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Banner5} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Banner6} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Banner7} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Banner;
