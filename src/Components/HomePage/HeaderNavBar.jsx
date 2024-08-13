import React, { useState } from "react";
import logo from "../../Assets/images/amazn_logo.JPG";
import Banner from "./Banner";
import ClientsCard from "./ClientsCard";
import TodaysDeals from "./TodaysDeals";
import BestSellers from "./Grocery";
import Clothing from "./Clothing";
import { useDispatch } from "react-redux";
import { updateReduxState } from "../../Slice";
import { useNavigate } from "react-router-dom";

const HeaderNavBar = () => {

  const [userInput, setUserInput] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) =>{
      
    setUserInput(e);
    

  }

  const handleClick = () => {
    dispatch(updateReduxState({ userTypedValue: userInput }));
    navigate("/productlisting");
  }


  return (
    <>
      <section className="header-sec py-2">
        <div className="header-container">
          <div className="header-row ps-4">
            <div className="header-amzn-logo">
              <img src={logo} className="header-nav-logo" alt="logo" />
            </div>
            <div className="header-loc">
              <div className="loc-logo">
                <i class="bi bi-geo-alt"></i>
              </div>
              <div className="location-details">
                <p className="p-0 m-0 fw-semibold header-delivery-loc">Delivering to London N6C</p>
                <p className="p-0 m-0 fw-bold lh-1 header-update-loc">Update location</p>
              </div>
            </div>
            <div className="search-bar">
              <div class="input-group mb-0">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Amazon.ca"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={(e)=>{handleChange(e.target.value)}}
                />
                <span class="input-group-text" id="basic-addon2" style={{background: "#FEBD69"}} onClick={()=>{handleClick()}}
                >
                <i class="bi bi-search" ></i>
                </span>
              </div>              
            </div>
            <div className="header-sign-in-details">
              <p className="fw-semibold header-hlo-signin">Hello, sign in</p>
              <p className="fw-bold lh-1 header-accnt-lists">Account&Lists <i class="bi bi-caret-down-fill"></i></p>
              
            </div>
            <div className="returns-orders">
              <p className="fw-semibold header-returns">Returns</p>
              <p className="fw-bold lh-1 header-orders">& Orders</p>
            </div>
            <div className="header-cart">
               <i class="bi bi-cart2"></i>
               <span className="p-1">Cart</span>
            </div>
          </div>
        </div>
      </section>

      <section className="nav-bar-sec p-2">
        <div className="nav-bar-container">
          <div className="nav-bar-row">
              <p><i class="bi bi-list"></i>All</p>
              <p>Best Sellers</p>
              <p>Prime</p>
              <p>New Releases</p>
              <p>Deals Store</p>
              <p>Home</p>
              <p>Music</p>
              <p>Electronics</p>
              <p>Gift Ideas</p>
              <p>Books</p>
              <p>Fashion</p>
              <p>Toys & Games</p>
              <p className="fw-bold ms-5 fs-5nav-bar-wtch-now">The Idea Of You - Watch now</p>
          </div>
          <div className="mobile-nav-menu">
              <span className="mobile-nav-toggle-btn">
                 <i class="bi bi-list"></i>
              </span>
              <div className="mobile-nav-bar">
                  <ul>
                      <li>Trending</li>
                      <li>Best Sellers</li>
                      <li>New Releases</li>
                  <li>Movers & Shakers</li>
                  </ul>
                  
              </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default HeaderNavBar;
