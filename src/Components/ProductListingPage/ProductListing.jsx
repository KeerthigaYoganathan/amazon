import React from 'react'
import FilterMenu from './FilterMenu'
import ProductListingArea from './ProductListingArea'

const ProductListing = () => {
  return (
    <>
    <div className='d-flex'>
        <div className="filter-menu-sec">
            <FilterMenu/>
        </div>
        <div className="product-listing-sec">
            <ProductListingArea />
        </div>
        
    </div>
    
    </>
  )
}

export default ProductListing