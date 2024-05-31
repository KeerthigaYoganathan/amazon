import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { todaysDealsArr } from "../../JsonData/TodaysDeals";

const TodaysDeals = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="todays-deals-sec my-3">
        <div
          className="todays-deals-container" 
          style={{ width: "95%", margin: "0 auto"}}
        >
          <h4 className="pt-3">Today's Deals</h4>

          <Slider {...settings}>
            {todaysDealsArr?.map((item, index) => {
              return (
                <>
                  <div className="todays-deals-cards-col">
                    <div className="todays-deals-cards-box">
                      <img
                        className="w-100"
                        style={{ height: "220px" }}
                        src={item.thumbnailImg}
                      />
                      <span className="todays-deals-off-percent">{item.offPercentage}</span>
                      <span className="todays-deals-ltd fw-bold">Limited-time deal</span>
                      <p className="fw-medium todays-deals-price">{item.price}</p>
                      <p className="todays-deals-product-name">{item.name}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
          
        </div>
      </section>
    </>
  );
};

export default TodaysDeals;
