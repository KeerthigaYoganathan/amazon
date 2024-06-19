import React,{useState} from 'react'
import FilterMenu from './FilterMenu'
import ProductListingArea from './ProductListingArea'

const ProductListing = () => {
   
  const [filterMenuData, setFilterMenuData] = useState({});

  const eventEmitterFn = (data) => {

    setFilterMenuData(data);

  }



  return (
    <>
    <div className='d-flex'>
        <div className="filter-menu-sec">
            <FilterMenu emitFn = {eventEmitterFn}/>
        </div>
        <div className="product-listing-sec">
            <ProductListingArea filterMenuData = {filterMenuData}/>
        </div>
        
    </div>
    
    </>
  )
}

export default ProductListing