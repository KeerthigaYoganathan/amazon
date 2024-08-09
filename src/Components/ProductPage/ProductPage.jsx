import React,{useEffect, useState} from 'react'
import ProductDetails from './ProductDetails'
import AddtoCart from './AddtoCart'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {toysGamesArr} from '../../JsonData/ToysGames';
import HeaderNavBar from '../HomePage/HeaderNavBar';
import { headPhonesArr } from '../../JsonData/HeadPhones';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from "react-redux";




const ProductPage = () => {

  const reduxState = useSelector(({ data }) => data);
    const tempHeadphonesArr = [headPhonesArr[0]];    
    const[data, setData] = useState(tempHeadphonesArr);
    
    
  
  const [searchParams] = useSearchParams();
  
    useEffect(()=>{
        let sp = searchParams.get("id");
    let tempState = reduxState?.jsonData?.headPhones?.filter((item, index)=>item?.id==sp)
    
        setData(tempState);
  }, [])
  

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
    <HeaderNavBar/>
    <div className='row' style={{maxWidth: "100%", marginTop:"14px"}}>
        <div className='product-details-sec col-lg-9'>
             <ProductDetails details={data}/>
        </div>
        <div className='add-to-cart-sec col-lg-3'>
            <AddtoCart details={data}/>
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