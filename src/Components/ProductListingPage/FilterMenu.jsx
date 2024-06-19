import React,{useState} from 'react';


const FilterMenu = ({emitFn}) => {

      const [freeshipping, setfreeshipping] = useState(null);
      const [availabilityStock, setAvailabilityStock] = useState(null);
      const [pricing, setPricing] = useState(null);
      const [bestSelling, setBestSelling] = useState(null);


      

  
  return (
    <>
      <section className='filter-sec'>
         <div className='filter-container'>
            <div className='filter-box'>
                <div className='eligible-free-shipping-'>
                <h4>Eligible for Free Shipping</h4>
                <input type="checkbox" id="free-shipping" name="free-shipping"  onChange = {(e)=>{
                  emitFn({shipping: e.target.checked})
                }}    />
                <label for="free-shipping"> FREE Shipping</label>
            </div>
            <div className='filter-availability-stock'>
                <h4>Availability</h4>
                <input type="checkbox" id="availability-out-of-stock" name="availability-out-of-stock" value="availability-out-of-stock" onChange={(e)=>{setAvailabilityStock(e.target.checked)
                  emitFn({outOfStock: true})
                }}/>
                <label for="availability-out-of-stock">Include Out of stock</label>
            </div>
            <div className='filter-pricing'>
                <h4>Sort by</h4>
                <input type="radio" id="filter-pricing-min" name="filter-price" value="min" onChange = {(e)=>{setPricing(e.target.value)
                  emitFn({lowPrice: true})
                }}/>
                <label for="filter-pricing-min">Price: Low to High</label>
                <input type="radio" id="filter-pricing-max" name="filter-price" value="max" onChange = {(e)=>{setPricing(e.target.value)
                  emitFn({highPrice: true})
                }}/>
                <label for="filter-pricing-max">Price: High to Low</label>
            </div>
            <div className='filter-best-selling'>
                <h4>Best Selling</h4>
                <input type="checkbox" id="best-selling" name="filter-pricing-max" value="filter-pricing-max" onChange={(e)=>{setBestSelling(e.target.checked)
                  emitFn({bestSelling: true})
                }}/>
                <label for="filter-pricing-max">Sort by best selling</label>
            </div>
            </div>
         </div>
      </section>
      
    </>
  )
}

export default FilterMenu