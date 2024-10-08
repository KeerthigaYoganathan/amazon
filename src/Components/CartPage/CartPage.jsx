import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

export const CartPage = () => {
  const reduxState = useSelector(({ data }) => data);
  
  
  const cartItem = reduxState?.cartData;
  const navigate = useNavigate();
  const checkoutFn = (item) => {
      navigate("/checkout");
  }
  const calculatePrice = () =>{
    let price=0;
    cartItem?.map((item)=>{
      price = price + item?.buyingPrice;
    })
    return price;
  }

  return (
    <section className="cart-page-sec" style={{ background: "#EAEDED" }}>
      
        
          <div className="cart-page-container flex flex-col items-center">
            <div
              className="cart-add-card flex items-center h-28 mt-8"
              style={{ width: "60%", background: "#ffff" }}
            >
              <img
                src="https://m.media-amazon.com/images/G/15/PAE/Wallet_Diversification/Icon_100x100._CB604921576_.png"
                className="object-contain ml-8"
              ></img>
              <p className="flex-grow ml-8">
                Give yourself options by adding another card to your Amazon
                account.
              </p>
            </div>
            <div className="cart-page-row flex flex-row w-full">
              <div
                className="cart-page-col-left basis-3/4 p-4"
                style={{ background: "#FFFF" }}
              >
                <div className="cart-title">
                  <h4 style={{ fontSize: "26px", lineHeight: "1" }}>
                    Shopping Cart
                  </h4>
                  <div
                    style={{
                      borderBottom: "1px solid rgb(209, 204, 204)",
                      paddingBottom: "8px",
                    }}
                    className="flex justify-between"
                  >
                    <p
                      style={{
                        color: "#007185",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                      className="mt-2"
                    >
                      Deselect all items
                    </p>
                    <p style={{ color: "#565959", fontSize: "16px" }}>Price</p>
                  </div>
                </div>
                {cartItem?.map((item, key)=>{
                    return(
                      <div
                  className="cart-product-row flex justify-between my-6"
                >
                  <div className="cart-product-img flex items-center w-1/4">
                    <input
                      type="checkbox"
                      id="item-checkbox"
                      className="item-checkbox"
                    ></input>
                    <img
                      src={item?.thumbnailImg}
                      style={{ padding: "12px" }}
                    />
                
                  </div>
                  <div className="cart-product-details w-2/4">
                    <p style={{ fontSize: "22px", lineHeight: "1.3" }}>
                      {item.name}
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#007600",
                      }}
                    >
                      In stock
                    </p>
                    <p style={{ color: "#565959", fontSize: "14px" }}>
                      Ships from and sold by {}
                    </p>
                    <p style={{ color: "#565959", fontSize: "14px" }}>
                      Gift options not available
                    </p>
                    <div
                      className="flex gap-2 items-center my-2"
                      style={{ color: "rgb(0, 113, 133)", fontSize: "12px" }}
                    >
                      <p
                        style={{
                          background: "rgb(240, 242, 242)",
                          border: "1px solid rgb(209, 204, 204)",
                          borderRadius: "4px",
                          color: "black",
                          padding: "4px",
                          fontSize: "13px",
                        }}
                      >
                        {" "}
                        Qty: 1 <i class="bi bi-chevron-down" style={{fontWeight:"bold"}}></i>
                      </p>
                      <p>Delete </p>
                      <p>Save for later </p>
                      <p>Share</p>
                    </div>
                  </div>
                  <div className="cart-product-price w-1/5 flex justify-end">
                    <p className="font-bold">{item.buyingPrice}</p>
                  </div>
                 </div>
                    )
                })}
                 <div style={{
                    borderBottom: "1px solid rgb(209, 204, 204)",
                    paddingBottom: "8px",
                  }}></div>
                <div className="cart-sub-total flex justify-end">
                    <p className="text-lg">Subtotal({cartItem?.length} item): <span className="font-bold">${calculatePrice()}</span></p>
                </div>
              </div>
              <div
                className="cart-page-col-right basis-1/4"
                
              >
                <div className="cart-total flex flex-col justify-center items-center" style={{ background: "#FFFF" }}>
                  <p style={{fontSize:"21px", marginTop: "12px"}}>Subtotal({cartItem?.length}): ${calculatePrice()}</p>
                  <p style={{
                    background: "#FFD814",
                    border: "1px solid rgb(209, 204, 204)",
                    borderRadius: "16px",
                    padding: "4px",
                    marginTop: "4px",
                    textAlign: "center",
                    width:"70%",
                    marginBottom:"22px"
                  }} onClick={(e)=>{checkoutFn("")}} className="cursor-pointer">Proceed to Checkout</p>
                </div>
                <div className="cart-prime-delivery my-4 flex p-3 gap-4" style={{background:"#FFFF"}}>
                  <div className="prime-delivery-img w-16">
                    <img src="https://m.media-amazon.com/images/G/15/marketing/prime/logos/established/2021/prime-logo-rgb-prime-blue._CB601514959_.svg" />
                  </div>
                  <div className="prime-delivery-details w-2/3 ">
                    <p className="text-base font-semibold">
                      Unlimited fast delivery on millions of eligible items. Get
                      started.
                    </p>
                    <p style={{
                    background: "#FFD814",
                    border: "1px solid rgb(209, 204, 204)",
                    borderRadius: "16px",
                    padding: "4px",
                    marginTop: "4px",
                    textAlign: "center",
                    width:"70%"
                  }} className="text-sm">Join Prime Student</p>
                  </div>
                </div>
                <div className="cart-you-might-also-like row" style={{background:"#FFFF"}}>
                    <div className="might-like-img">
                      <img src="https://m.media-amazon.com/images/I/61cm-9ZjI0L._AC_UL320_.jpg" />
                    </div>
                    <div className="might-like-product-details">
                      {/* <p>{item.name}</p> */}
                    </div>
                </div>
              </div>
            </div>
          </div>
        
     
    </section>
  );
};
