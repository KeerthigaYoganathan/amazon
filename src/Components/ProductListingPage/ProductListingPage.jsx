import React from 'react';
import HeaderNavBar from '../HomePage/HeaderNavBar';
import Footer from '../HomePage/Footer';
import ProductListing from './ProductListing';
import { useSelector } from "react-redux";


const ProductListingPage = () => {

  const reduxState = useSelector(({ data }) => data);
console.log(reduxState, "test");


  return (
    <>
    <HeaderNavBar/>
    <ProductListing/>
    <Footer/>
    </>
  )
}

export default ProductListingPage