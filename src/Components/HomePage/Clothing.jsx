import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {clothingArr} from '../../JsonData/Clothing';

const Clothing = () => {

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
        <section className='clothing-sec m-3' style={{background: "#fff"}}>
            <div className='clothing-container' style={{ width: "95%", margin: "0 auto" }}>
                <h4 className='pt-3'>Best Sellers in Clothing & Accessories</h4>
                <Slider {...settings}>
            {clothingArr?.map((item, index) => {
              return (
                <>
                  <div className="clothing-col my-3">
                    <div className="clothing-box">
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

export default Clothing