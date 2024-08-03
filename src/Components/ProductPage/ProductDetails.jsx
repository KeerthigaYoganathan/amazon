import React,{useState, useEffect} from 'react';
import { headPhonesArr } from '../../JsonData/HeadPhones';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from "react-redux";


const ProductDetails = () => {
    const reduxState = useSelector(({ data }) => data);
    const tempHeadphonesArr = [headPhonesArr[0]];    
    const[data, setData] = useState(tempHeadphonesArr);
  
  const [searchParams] = useSearchParams();
  
    useEffect(()=>{
        let sp = searchParams.get("id");
    let tempState = reduxState?.jsonData?.headPhones?.filter((item, index)=>item?.id==sp)
    console.log(tempState, "fri");
        setData(tempState);
  }, [])

    

  return (
    <>
    <section className='product-details-sec'>
        <div className='product-details-container'>
            <div className='row m-0'>
               {data.map((item, index)=>{
                return(
                    <>
                    <div key={item.id} className='product-details-img-col col-lg-4'>
                        <div className='product-details-img-item'>
                            {/* <img src={item.thumbnailImg}/> */}
                        </div>
                    </div>
                    <div key={item.id} className='product-details-desc-col col-lg-8'>
                        <div className='product-details-desc-box'>
                        <p className='product-details-product-name'>{item.name}</p>
                            <div className='product-details'>
                            
                                 <span className='product-listing-rating'>
                                <span className='product-details-no-of-ratings'>4.5</span>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-half"></i>
                            <span>{item.numberOfRatings}</span>
                            </span>
                            <p className='product-detais-no-of-items'>{item.noOfOrdersPastMonth} bought in past month</p>
                            </div>
                            
                            <p style={{fontSize:"22px", paddingTop:"12px"}}><sup style={{fontSize: "14px"}}>$</sup>{item.buyingPrice}<sup style={{fontSize: "14px"}}>00</sup></p>
                            <p className='product-detais-item-color' style={{color:"rgb(85, 85, 85)"}}>Colour Name: {item.colour}</p>
                        </div>
                        <div className='product-details-alexa'>
                            <div className='row'>
                                <div className='alexa-logo col-lg-2'>
                                    <img src="https://m.media-amazon.com/images/I/21R85tkHvCL.png" alt='alexa-logo'/>
                                </div>
                                <div className='alexa-desc col-lg-10'>
                                    <p>Ask to play music, get directions, control smart home devices, and more with this device.</p>
                                    <p>ALEXA BUILT-IN</p>
                                </div>
                            </div>
                             
                        </div>
                        <div className='about-this-item'>
                            <h5>About this item</h5>
                            <p>{item.aboutThisItem}</p>
                        </div>
                    </div>
                    </>
                    

                )
               })}
            </div>
        </div>
    </section>
    </>
  )
}

export default ProductDetails