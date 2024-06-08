import React from 'react';
import {headPhonesArr} from '../../JsonData/HeadPhones';

const ProductListingArea = () => {




  return (
    <>
    <section className='product-listing-area-sec'>
        <div className='product-listing-area-container'>
            <div className='product-listing-row row m-0'>
            {headPhonesArr.map((item, index)=>
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
                      {item.freeShipping ? (<p>Free delivery Date</p>) : (<p>Free delivery Date on $35 of items shipped by Amazon </p>)}
                      <p>Or fastest delivery Date</p>
                      <button>Add to cart</button>
                      </div>
                      
                    </div>
                </div>
               </div>
              )
            }              
            )}
                
            </div>
        </div>
    </section>
    </>
  )
}

export default ProductListingArea