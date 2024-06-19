import React, {useState , useEffect} from 'react';
import {headPhonesArr} from '../../JsonData/HeadPhones';



const ProductListingArea = ({filterMenuData}) => {

  const[data, setData] = useState(headPhonesArr);
  const[filterData, setFilterData] = useState(headPhonesArr);

  

  // useEffect (()=>{
  //   if(filterMenuData.hasOwnProperty("shipping")){
  //     setData(headPhonesArr);
  //     const eligibleFreeShipping = () =>{
  //         let temp = [...data];
  //         console.log(temp);
  //         temp = temp.filter((item, index)=>{
  //           return item?.freeShipping === filterMenuData?.shipping
  //         })
  //         setData(temp);
          
  //     }
  //     eligibleFreeShipping();
  //   }
  // },[filterMenuData?.shipping])

  const dateFormatFn = (dates) =>{
      const date = new Date();
      date.setDate(date.getDate() + dates);
        
      const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

      let day = days[date.getDay()];
      let month = months[date.getMonth()];
      let dateNum = date.getDate();

      return(`${day}, ${month} ${dateNum}`);
     

  }

  

  

  return (
    <>
    <section className='product-listing-area-sec'>
        <div className='product-listing-area-container'>
            <div className='product-listing-row row m-0'>

              {data.map((item, index)=>{

                if(filterMenuData.hasOwnProperty("shipping")){

                  if(filterMenuData?.shipping===item.freeShipping){

                    return(
                      <div className='product-listing-col col-lg-4 my-3'>
                      <div className='product-listing-box'>
                          <div className='product-listing-item'>
                            <div className='product-listing-image text-center'>
                              <img src={item.thumbnailImg} /> 
                            </div>
                            <div className='product-listing-details'>
                            <p className='product-listing-name'>{item.name}</p>
                            <span className='product-listing-rating'>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-half"></i>
                                <span>{item.numberOfRatings}</span>
                            </span>
                            <p>{item.noOfOrdersPastMonth} bought in past month</p>
                            <p>{item.buyingPrice}</p>
                            {item.mrpPrice ?(<p>{item.mrpPrice}</p>) : null}
                            {item.freeShipping ? (<p>Free delivery {dateFormatFn(item.freeDeliveryDate)}</p>) : (<p>Free delivery {dateFormatFn(item.freeDeliveryDate)} on $35 of items shipped by Amazon </p>)}
                            <p>Or fastest delivery {dateFormatFn(item.fastDeliveryDate)}</p>
                            <button>Add to cart</button>
                            </div>
                            
                          </div>
                      </div>
                     </div>
                    )
  
  
                  }
                }

                else{

                  return(
                    <div className='product-listing-col col-lg-4 my-3'>
                    <div className='product-listing-box'>
                        <div className='product-listing-item'>
                          <div className='product-listing-image text-center'>
                            <img src={item.thumbnailImg} /> 
                          </div>
                          <div className='product-listing-details'>
                          <p className='product-listing-name'>{item.name}</p>
                          <span className='product-listing-rating'>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-half"></i>
                              <span>{item.numberOfRatings}</span>
                          </span>
                          <p>{item.noOfOrdersPastMonth} bought in past month</p>
                          <p>{item.buyingPrice}</p>
                          {item.mrpPrice ?(<p>{item.mrpPrice}</p>) : null}
                          {item.freeShipping ? (<p>Free delivery {dateFormatFn(item.freeDeliveryDate)}</p>) : (<p>Free delivery {dateFormatFn(item.freeDeliveryDate)} on $35 of items shipped by Amazon </p>)}
                          <p>Or fastest delivery {dateFormatFn(item.fastDeliveryDate)}</p>
                          <button>Add to cart</button>
                          </div>
                          
                        </div>
                    </div>
                   </div>
                  )

                }

                
              })}


            {/* {data.map((item, index)=> 



            {
              return(
                <div className='product-listing-col col-lg-4 my-3'>
                <div className='product-listing-box'>
                    <div className='product-listing-item'>
                      <div className='product-listing-image text-center'>
                        <img src={item.thumbnailImg} /> 
                      </div>
                      <div className='product-listing-details'>
                      <p className='product-listing-name'>{item.name}</p>
                      <span className='product-listing-rating'>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-half"></i>
                          <span>{item.numberOfRatings}</span>
                      </span>
                      <p>{item.noOfOrdersPastMonth} bought in past month</p>
                      <p>{item.buyingPrice}</p>
                      {item.mrpPrice ?(<p>{item.mrpPrice}</p>) : null}
                      {item.freeShipping ? (<p>Free delivery {dateFormatFn(item.freeDeliveryDate)}</p>) : (<p>Free delivery {dateFormatFn(item.freeDeliveryDate)} on $35 of items shipped by Amazon </p>)}
                      <p>Or fastest delivery {dateFormatFn(item.fastDeliveryDate)}</p>
                      <button>Add to cart</button>
                      </div>
                      
                    </div>
                </div>
               </div>
              )
            }              
            )} */}
                
            </div>
        </div>
    </section>
    </>
  )
}

export default ProductListingArea