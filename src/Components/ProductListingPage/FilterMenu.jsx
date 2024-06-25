import React,{useState} from 'react';


const FilterMenu = ({emitFn}) => {

          const [filterObj, setFilterObj] = useState({shipping:false, availability:false, price: false, bestSelling: false});

      const handleInpChg = (event) => {
        if(event.target.name === "free-shipping"){
          filterObj.shipping = event.target.checked;
          setFilterObj({...filterObj});
         
        }
        else if(event.target.name === "availability-out-of-stock"){
          filterObj.availability = event.target.checked;
          setFilterObj({...filterObj});
        }
        else if(event.target.name === "filter-price"){
          if(event.target.value === "min"){
            filterObj.price = event.target.value;
            setFilterObj({...filterObj});
          }
          else{
            filterObj.price = event.target.value;
            setFilterObj({...filterObj});
          }
             
        }
        else if(event.target.name === "filter-best-selling"){
          filterObj.bestSelling = event.target.checked;
          setFilterObj({...filterObj});
        }
        emitFn({...filterObj});
      }

  
  return (
    <>
      <section className='filter-sec'>
         <div className='filter-container'>
            <div className='filter-box'>
                <div className='eligible-free-shipping-'>
                <h4>Eligible for Free Shipping</h4>
                <input type="checkbox" id="free-shipping" name="free-shipping"  onChange = {(event)=>{
                  handleInpChg(event);
                }}    />
                <label for="free-shipping"> FREE Shipping</label>
            </div>
            <div className='filter-availability-stock'>
                <h4>Availability</h4>
                <input type="checkbox" id="availability-out-of-stock" name="availability-out-of-stock" value="availability-out-of-stock" onChange = {(event)=>{
                  handleInpChg(event);
                }} />
                <label for="availability-out-of-stock">Include Out of stock</label>
            </div>
            <div className='filter-pricing'>
                <h4>Sort by</h4>
                <input type="radio" id="filter-pricing-min" name="filter-price" value="min" onChange = {(event)=>{
                  handleInpChg(event);
                }} />
                <label for="filter-pricing-min">Price: Low to High</label>
                <input type="radio" id="filter-pricing-max" name="filter-price" value="max" onChange = {(event)=>{
                  handleInpChg(event);
                }} />
                <label for="filter-pricing-max">Price: High to Low</label>
            </div>
            <div className='filter-best-selling'>
                <h4>Best Selling</h4>
                <input type="checkbox" id="best-selling" name="filter-best-selling" value="filter-pricing-max" onChange = {(event)=>{
                  handleInpChg(event);
                }} />
                <label for="filter-pricing-max">Sort by best selling</label>
            </div>
            </div>
         </div>
      </section>
      
    </>
  )
}

export default FilterMenu