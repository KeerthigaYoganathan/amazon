import React from "react";
import HeaderNavBar from "../HomePage/HeaderNavBar";
import { Divider, Steps } from "antd";

const TrackingPage = () => {
  return (
    <>
      <HeaderNavBar />
      <section className="tracking-page-sec">
        <div className="tracking-page-container">
          <div className="arriving-box border-b m-3">
            <p className="text-xl font-semibold">Arriving 16 Oct - 22 Oct</p>
            <img
              src="https://m.media-amazon.com/images/I/61vJtKbAssL._AC_UL320_.jpg"
              className="w-36 h-36 p-4"
            />
          </div>
          <div className="shipping-details">
            <div className="shipping-box">
              <div className="shipping-title text-center">
                <p className="font-semibold text-xl pb-1.5">Shipped</p>
                <p className="">Package arrived at a carrier facility</p>
              </div>
              <div className="shipping-bar mt-4 flex justify-center mx-auto relative">
                {/* <i className="bi bi-check-circle-fill absolute top-2" style={{color:"#1196AB"}}></i>
                        <span className='span1 h-2 w-1/5 bg-[#1196AB]'></span>                        
                        <i className="bi bi-check-circle-fill absolute top-0" style={{color:"#1196AB"}}></i>
                        <span className='span2 bg-[#E9E7E7] h-2 w-4/5'></span> */}
                <Steps
                  progressDot
                  current={1}
                  items={[
                    {
                      title: "Ordered",
                    },
                    {
                      title: "Shipped",
                    },
                    {
                      title: "Out for delivery",
                    },
                    {
                        title: "Delivered",
                    },
                  ]}
                />
              </div>
              <div className="delivery-details flex gap-4 justify-center my-8">
                <div className="delivery-by border-4 p-4">
                  <p className="text-lg font-semibold">
                    Delivery By Chinna Post
                  </p>
                  <p>Tracking ID:</p>
                  <p>See all updates</p>
                </div>
                <div className="shipping-address border-4 p-4">
                  <p className="text-lg font-semibold">Shipping Address</p>
                  <p>Name</p>
                  <p>Address</p>
                </div>
                <div className="order-info border-4 p-4">
                  <p className="text-lg font-semibold">Order Info</p>
                  <p>View order details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrackingPage;
