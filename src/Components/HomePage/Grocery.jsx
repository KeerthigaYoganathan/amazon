import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {bestSellersArr} from '../../JsonData/BestSellers';

const Grocery = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
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
        <section className='best-sellers-sec pt-3 m-3' style={{background: "#fff"}}>
            <div className='best-sellers-container' style={{ width: "95%", margin: "0 auto" }}>
                <h4>Best Sellers in Grocery & Gourmet Food</h4>
                <Slider {...settings}>
            {bestSellersArr?.map((item, index) => {
              return (
                <>
                  <div className="best-sellers-col my-3">
                    <div className="best-sellers-box">
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

export default Grocery