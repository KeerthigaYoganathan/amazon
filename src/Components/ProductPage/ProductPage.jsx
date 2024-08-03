import React,{useEffect, useState} from 'react'
import ProductDetails from './ProductDetails'
import AddtoCart from './AddtoCart'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {toysGamesArr} from '../../JsonData/ToysGames';



const ProductPage = () => {
  

  const settings = {
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
    <div className='d-flex'>
        <div className='product-details-sec'>
            <ProductDetails/>
        </div>
        <div className='add-to-cart-sec col-lg-2'>
            <AddtoCart/>
        </div>
    </div>
    <section className='toys-games-sec pt-3 m-3' style={{background: "#fff"}}>
            <div className='toys-games-container' style={{ width: "95%", margin: "0 auto" }}>
                <h4>Best Sellers in Toys & Games</h4>
                <Slider {...settings}>
            {toysGamesArr?.map((item, index) => {
              return (
                <>
                  <div className="toys-games-col my-3">
                    <div className="toys-games-box">
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

export default ProductPage