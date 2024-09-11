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
          <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Banner1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Banner2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Banner3} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Banner4} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Banner5} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Banner6} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Banner7} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Banner;
