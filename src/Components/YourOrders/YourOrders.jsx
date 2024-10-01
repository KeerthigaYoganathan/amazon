import React from "react";
import HeaderNavBar from "../HomePage/HeaderNavBar";

const YourOrders = () => {
  return (
    <>
      <HeaderNavBar />
      <section className="your-orders-sec">
        <div className="your-orders-container mx-auto flex justify-center">
          <div className="your-orders-container-wrapper w-[70%]">
            <div className="your-orders-heading my-6">
              <p className="text-2xl font-medium">Your Orders</p>
            </div>
            <div className="your-orders-small-heading">
              <p className="m-2 font-semibold text-lg border-b">Orders</p>
            </div>
            <div className="order-box border-2 rounded-lg">
              <div className="order-details-box bg-[#F0F2F2] border-b p-2">
                <div className="order-details flex justify-between text-xs text-slate-600">
                  <div className="order-details-first-set flex gap-4">
                    <div className="order-placed">
                      <p>ORDER PLACED</p>
                      <p>June 24, 2024</p>
                    </div>
                    <div className="order-total">
                      <p>Total</p>
                      <p>$13.29</p>
                    </div>
                    <div className="order-ship">
                      <p>SHIP TO</p>
                      <p>User name</p>
                    </div>
                  </div>
                  <div className="order-details-second-set">
                    <div className="view-order-details">
                      <p>ORDER ID</p>
                      <p>View order details</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-details flex justify-between p-3 gap-2 border-b">
                  <div className="arriving-details">
                      <p className="text-[#008577] font-semibold text-base">Arriving 16 July - 7 August</p>
                      <p className="text-sm">Shipped</p>
                      <div className="item-img-desc flex gap-4 my-4">
                          <img src="https://m.media-amazon.com/images/I/61vJtKbAssL._AC_UL320_.jpg" className="w-24 h-24"/>
                          <p className="text-[#008577] text-sm font-medium">Sony WH-1000XM5 Wireless Industry Leading Noise Cancelling Headphones with Auto Noise Cancelling Optimizer, Crystal Clear...</p>
                      </div>
                  </div>
                  <div className="tracking-details w-[30%] text-center flex flex-col gap-1">
                      <p className="rounded-2xl" style={{
                    border: "1px solid #A8AAAA",
                    padding: "6px",
                    fontSize: "14px",
                    color: "#000",
                    padding: "6px 8px",
                  }}>Track Package</p>
                      <p className="rounded-2xl" style={{
                    border: "1px solid #A8AAAA",
                    padding: "6px",
                    fontSize: "14px",
                    color: "#000",
                    padding: "6px 8px",
                  }}>Problem with order</p>
                      <p className="rounded-2xl" style={{
                    border: "1px solid #A8AAAA",
                    padding: "6px",
                    fontSize: "14px",
                    color: "#000",
                    padding: "6px 8px",
                  }}>Return or replace items</p>
                      <p className="rounded-2xl" style={{
                    border: "1px solid #A8AAAA",
                    padding: "6px",
                    fontSize: "14px",
                    color: "#000",
                    padding: "6px 8px",
                  }}>Share gift receipt</p>
                      <p className="rounded-2xl" style={{
                    border: "1px solid #A8AAAA",
                    padding: "6px",
                    fontSize: "14px",
                    color: "#000",
                    padding: "6px 8px",
                  }}>Leave seller feedback</p>
                      <p className="rounded-2xl" style={{
                    border: "1px solid #A8AAAA",
                    padding: "6px",
                    fontSize: "14px",
                    color: "#000",
                    padding: "6px 8px",
                  }}>Write a product review</p>
                  </div>
              </div>
              <div className="archive-order px-3 py-2 ">
                  <p className="text-sm text-[#008577]">Archive Order</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default YourOrders;
