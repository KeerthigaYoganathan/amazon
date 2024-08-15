import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import ProductListingPage from './Components/ProductListingPage/ProductListingPage';
import ProductPage from './Components/ProductPage/ProductPage';
import { Provider } from 'react-redux';
import {store} from './Store'
import { CartPage } from './Components/CartPage/CartPage';

const Router = () => {
  return (
    
      
      <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/productlisting" element={<ProductListingPage/>}/>
                <Route path="/product" element={<ProductPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
            </Routes>
        </BrowserRouter>
      </Provider>
    
  )
}

export default Router