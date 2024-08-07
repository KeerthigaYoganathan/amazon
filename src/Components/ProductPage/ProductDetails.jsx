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
    <section className='sec'>
        <div className='product-details-container'>
            
               {data.map((item, index)=>{
                    return(
                        <div className='row m-0'>
                            <div key={item.id} className='col-lg-4'>
                                <img src={item.thumbnailImg}/>
                            </div>
                            <div className='col-lg-8'>
                            <p className='product-details-product-name' style={{fontSize:"26px", lineHeight:"1.3"}}>{item.name}</p>
                            <p style={{color: "#007185"}}>Visit the Sony Store</p>
                            <span className='product-details-no-of-ratings' style={{color:"#0f1111", fontSize:"14px"}}>4.5</span>
                            <span style={{color:"#DE7921"}}>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-half"></i>
                            </span>                            
                            <span style={{fontSize:"16px"}}>{item.numberOfRatings}</span>
                            <p className='product-detais-no-of-items' style={{fontSize:"14px", borderBottom:"1px solid rgb(209, 204, 204)"}}>{item.noOfOrdersPastMonth} bought in past month</p>
                            <p style={{fontSize:"22px", paddingTop:"12px"}}><sup style={{fontSize: "14px"}}>$</sup>{item.buyingPrice}<sup style={{fontSize: "14px"}}>00</sup></p>
                            <p className='product-detais-item-color' style={{color:"rgb(85, 85, 85)"}}>Colour Name: {item.colour}</p>
                            <img src="https://m.media-amazon.com/images/I/21R85tkHvCL.png" alt='alexa-logo'/>
                            <p>Ask to play music, get directions, control smart home devices, and more with this device.</p>
                            <p style={{borderBottom:"1px solid rgb(209, 204, 204)"}}>ALEXA BUILT-IN</p>
                            <h5>About this item</h5>
                            <p>{item.aboutThisItem}</p>
                            </div>
                            
                        </div>
                        
                    )
               })}
            
        </div>
    </section>
    </>
  )
}

export default ProductDetails