import React from "react";
import ShippingAddress from "./ShippingAddress";
import PaymentMethod from "./PaymentMethod";
import ItemShipping from "./ItemShipping";
import logo1 from "../../Assets/images/checkout_logo.JPG";

const CheckoutPage = () => {
  return (
    <>
      <section className="checkout-page-sec">
        <div className="checkout-page-container">
          <div className="checkout-page-header-row ml-6 mr-6">
            <div className="checkout-pg-row flex justify-around">
              <img src={logo1} className="checkout-pg-logo" alt="..." />
              <p className="checkout-pg-heading text-3xl font-medium">Checkout(<span style={{color:"#007185"}}>1 item</span>)</p>
              <p className="checkout-pg-lock text-3xl" style={{color:"#999999"}}>
                <i class="bi bi-lock-fill"></i>
              </p>
            </div>
          </div>
          <div className="shipping-details-row flex gap-4 justify-center">
              <div className="adrs-payment-item w-3/5">
                 <ShippingAddress />
                 <PaymentMethod />
                 <ItemShipping />
              </div>
              <div className="order-summary w-2/5" style={{border:"1px solid #D5D9D9", width: "200px", height:"200px"}}>

              </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;
