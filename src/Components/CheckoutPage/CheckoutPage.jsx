import React from "react";
import ShippingAddress from "./ShippingAddress";
import PaymentMethod from "./PaymentMethod";
import ItemShipping from "./ItemShipping";
import logo1 from "../../Assets/images/checkout_logo.JPG";
import { useSelector } from "react-redux";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

const CheckoutPage = () => {
  const reduxState = useSelector(({ data }) => data);
  const data = reduxState?.cartData;
  const navigate = useNavigate();
  const yourOrdersFn = (item) => {
    navigate('/yourorders');
  }
  const calculatePrice = () =>{
    let price=0;
    data?.map((item)=>{
      price = price + item?.buyingPrice;
    })
    return price;
  }
  return (
    <>
      <section className="checkout-page-sec">
        <div className="checkout-page-container">
          {data.map((item, index)=>{
            return(
                <>
                <div className="checkout-page-header-row ml-6 mr-6">
            <div className="checkout-pg-row flex justify-around">
              <img src={logo1} className="checkout-pg-logo" alt="..." />
              <p className="checkout-pg-heading text-3xl font-medium">
                Checkout(<span style={{ color: "#007185" }}>1 item</span>)
              </p>
              <p
                className="checkout-pg-lock text-3xl"
                style={{ color: "#999999" }}
              >
                <i class="bi bi-lock-fill"></i>
              </p>
            </div>
          </div>
          <div className="shipping-details-row flex gap-4 justify-center">
            <div className="adrs-payment-item w-[60%]">
              <ShippingAddress />
              <PaymentMethod />
              <p className="rounded-md !mt-4 ml-8 cursor-pointer" style={{
                    background: "#FFD814",
                    border: "#FFD814",
                    padding: "6px",
                    fontSize: "14px",
                    color: "#000",
                    padding: "8px 12px",
                    display: "inline-block"
                  }} onClick={(e)=>{yourOrdersFn(item)}}>Place an order</p>
            </div>
            <div
              className="order-summary w-[20%] rounded-md p-3 h-80"
              style={{
                border: "1px solid #D5D9D9",
              }}
            >
              <div className="order-summary-shipping-box text-center">
                <p
                  className="rounded-2xl cursor-pointer"
                  style={{
                    background: "#FFD814",
                    border: "#FFD814",
                    padding: "6px",
                    fontSize: "14px",
                    color: "#000",
                    padding: "8px 12px",
                  }}
                  onClick={(e)=>{yourOrdersFn(item)}}
                >
                  Use this payment method
                </p>
                <p
                  className="text-xs mt-2 mb-2"
                  style={{ borderBottom: "1px solid #D5D9D9" }}
                >
                  Choose a payment method to continue checking out. You'll still
                  have a chance to review and edit your order before it's final
                </p>
              </div>
              <div className="order-summary">
                <p className="text-base font-semibold mt-2 mb-2">Order Summary</p>
                <div className="flex justify-between border-b">
                <div className="summary-details text-[12px]">
                  <p>Items:</p>
                  <p>Shipping & Handling:</p>
                  <p className="mt-2">Total before tax:</p>
                  <p>Estimated GST/HST:</p>
                  <p>Estimated PST/RST/QST:</p>
                </div>
                <div className="summary-price-details text-[12px] ">
                  <p>${calculatePrice()}</p>
                  <p>$0.00</p>
                  <p className="m-1 w-12" style={{ borderBottom: "1px solid #D5D9D9" }}></p>
                  <p>$8.54</p>
                  <p>$0.00</p>
                  <p>$0.00</p>
                </div>
                </div>
                <div className="flex justify-between text-[#B82704] font-semibold">
                   <p>Order Total:</p>
                   <p className="mr-5">${calculatePrice()}</p>
                </div>
                
              </div>
              
            </div>
          </div>
                </>
            )
          })}
          
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;
