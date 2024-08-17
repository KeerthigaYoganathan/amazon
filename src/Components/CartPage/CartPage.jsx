import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

export const CartPage = () => {
  const reduxState = useSelector(({ data }) => data);
  const cartItem = reduxState?.cartData;
  const [data, setData] = useState(cartItem)

  return (
   
      <section className="cart-page-sec" style={{background:"#EAEDED"}}>
        {data.map((item, index)=>{
            return(
              <div className="cart-page-container flex flex-col items-center">
              <div className="cart-add-card flex items-center h-28 mt-8" style={{width:"60%", background:"#ffff"}}>
                  <img src="https://m.media-amazon.com/images/G/15/PAE/Wallet_Diversification/Icon_100x100._CB604921576_.png" className="object-contain ml-8"></img>
                  <p className="flex-grow ml-8">Give yourself options by adding another card to your Amazon account.</p>
              </div>
              <div className="cart-page-row flex flex-row w-full">
                <div className="cart-page-col-left basis-3/4 p-4" style={{background:"#FFFF"}}>
                  <div className="cart-title">
                    <h4 style={{fontSize:"26px", lineHeight:"1"}}>Shopping Cart</h4>
                    <div style={{borderBottom:"1px solid rgb(209, 204, 204)", paddingBottom:"8px"}} className="flex justify-between">
                         <p style={{color: "#007185", fontSize:"14px", fontWeight:"500"}} className="mt-2">Deselect all items</p>
                         <p style={{ color: "#565959", fontSize:"16px" }}>Price</p>
                    </div>
                    
                  </div>
                  <div className="cart-product-row flex" style={{borderBottom:"1px solid rgb(209, 204, 204)", paddingBottom:"8px"}}>
                    <div className="cart-product-img">
                         <img src="https://m.media-amazon.com/images/I/61vJtKbAssL._AC_UL320_.jpg" style={{padding:"12px"}}/>
                    </div>
                    <div className="cart-product-details">
                      <p style={{fontSize:"22px", lineHeight:"1.3"}}>
                        Sony WH-1000XM5 Wireless Industry Leading Noise Cancelling
                        Headphones with Auto Noise Cancelling Optimizer, Crystal
                        Clear...
                      </p>
                      <p style={{
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#007600",
                      }}>In stock</p>
                      <p style={{ color: "#565959", fontSize:"14px" }}>Ships from and sold by {}</p>
                      <p style={{ color: "#565959", fontSize:"14px" }}>Gift options not available</p>
                    </div>
                    <div className="cart-product-price">
                        <p>$122</p>
                    </div>
                  </div>
                </div>
                <div className="cart-page-col-right basis-1/4" style={{background:"#FFFF"}}>
                    <div className="cart-total">
                        <p>Subtotal:</p>
                        <p>Proceed to Checkout</p>
                    </div>
                    <div className="cart-prime-delivery">
                          <div className="prime-delivery-img">
                          <img src="https://m.media-amazon.com/images/G/15/marketing/prime/logos/established/2021/prime-logo-rgb-prime-blue._CB601514959_.svg"/>
                          </div>
                          <div className="prime-delivery-details">
                              <p>Unlimited fast delivery on millions of eligible items. Get started.</p>
                              <p>Join Prime Student</p>
                          </div>
                          <div className="cart-you-might-also-like row">
                            <div className="might-like-img">
                                <img src="https://m.media-amazon.com/images/I/61cm-9ZjI0L._AC_UL320_.jpg"/>
                            </div>
                            <div className="might-like-product-details">
                                <p>Product name{}6tr</p>
                            </div>
                          </div>
                          
                    </div>
                </div>
              </div>
            </div>
            )
          })}
        
      </section>
    
  );
};
