import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {beautyArr} from '../../JsonData/Beauty'

const Beauty = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
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
        <section className='beauty-sec pt-3 m-3' style={{background: "#fff"}}>
            <div className='beauty-container' style={{ width: "95%", margin: "0 auto" }}>
                <h4>Best Sellers in Beauty & Personal Care</h4>
                <Slider {...settings}>
            {beautyArr?.map((item, index) => {
              return (
                <>
                  <div className="beauty-col my-3">
                    <div className="beauty-box">
                      <img
                        className="w-100"
                        style={{ height: "220px" }}
                        src={item.thumbnailImg}
                      />
                     
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
               
            </div>
        </section>
    </>
  )
}

export default Beauty