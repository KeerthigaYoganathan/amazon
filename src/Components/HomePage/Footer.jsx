import React from "react";
import logo from "../../Assets/images/footer_logo.JPG";

const Footer = () => {
  return (
    <>
      <section className="footer-sec">
        <div className="footer-back-to-top" style={{ background: "#37475A" }}>
          <p>Back to top</p>
        </div>
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-row row justify-content-center">
              <div className="footer-col col-lg-3">
                <div className="footer-col-box">
                  <div className="get-to-know">
                    <h4>Get to know us</h4>

                    <p>Careers</p>
                    <p>Amazon and Our Planet</p>
                    <p>Investor Relations</p>
                    <p>Press Releases</p>
                    <p>Amazon Science</p>
                  </div>
                </div>
              </div>
              <div className="footer-col col-lg-3">
                <div className="footer-col-box">
                  <div className="make-money">
                    <h4>Make Money with us</h4>

                    <p>Sell on Amazon</p>
                    <p>Supply to Amazon</p>
                    <p>Become an Affiliate</p>
                    <p>Protect & Build Your Brand</p>
                    <p>Sell on Amazon Handmade</p>
                    <p>Advertise Your Products</p>
                    <p>Independently Publish with Us</p>
                    <p>Host an Amazon Hub</p>
                  </div>
                </div>
              </div>
              <div className="footer-col col-lg-3">
                <div className="footer-col-box">
                  <div className="amazon-payment">
                    <h4>Amazon Payment Products</h4>

                    <p>Amazon.ca Rewards Mastercard</p>
                    <p>Shop with Points</p>
                    <p>Reload Your Balance</p>
                    <p>Amazon Currency Converter</p>
                    <p>Gift Cards</p>
                    <p>Amazon Cash</p>
                  </div>
                </div>
              </div>
              <div className="footer-col col-lg-3">
                <div className="footer-col-box">
                  <div className="let-us-help">
                    <h4>Let Us Help You</h4>

                    <p>Shipping Rates & Policies</p>
                    <p>Amazon Prime</p>
                    <p>Returns Are Easy</p>
                    <p>Manage your Content and Devices</p>
                    <p>Recalls and Product Safety Alerts</p>
                    <p>Customer Service</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-line"></div>
            <div className="footer-link-line row justify-content-center">
              <p className="footer-link-line-logo">
                <img src={logo} alt="logo" />
              </p>
              <p className="footer-link-line-lang">English</p>
              <p className="footer-link-line-country">Canada</p>
            </div>
          </div>
          <div className="footer-bottom">
             <div className="footer-bottom-row row justify-content-center">
                <div className="footer-bottom-col">
                    <div className="footer-bottom-col-box">
                        <div className="amazn-music">
                            <p>Amazon Music</p>
                            <p>Stream millions of songs</p>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-col">
                    <div className="footer-bottom-col-box">
                        <div className="amazn-ad">
                            <p>Amazon Advertising</p>
                            <p>Find, attract and engage customers</p>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-col">
                    <div className="footer-bottom-col-box">
                        <div className="amazn-business">
                            <p>Amazon Business</p>
                            <p>Everything for your business</p>
                        </div>
                    </div>
                </div>     
                <div className="footer-bottom-col">
                    <div className="footer-bottom-col-box">
                        <div className="amazn-drive">
                            <p>Amazon Drive</p>
                            <p>Cloud Storage from Amazon</p>
                        </div>
                    </div>
                </div>    
                <div className="footer-bottom-col">
                    <div className="footer-bottom-col-box">
                        <div className="amazn-web-services">
                            <p>Amazon Web Services</p>
                            <p>Scalable Cloud</p>
                            <p>Computing Services</p>
                        </div>
                    </div>
                </div>   
                <div className="footer-bottom-col">
                    <div className="footer-bottom-col-box">
                        <div className="good-reads">
                            <p>Goodreads</p>
                            <p>Book reviews & recommendations</p>
                        </div>
                    </div>
                </div> 
                <div className="footer-bottom-col">
                    <div className="footer-bottom-col-box">
                        <div className="imdb">
                            <p>IMDb</p>
                            <p>Movies, TV & Celebrities</p>
                        </div>
                    </div>
                </div>    
                <div className="footer-bottom-col">
                    <div className="footer-bottom-col-box">
                        <div className="amazn-photos">
                            <p>Amazon Photos</p>
                            <p>Unlimited Photo Storage Free With Prime</p>
                        </div>
                    </div>
                </div>    
                <div className="footer-bottom-col">
                    <div className="footer-bottom-col-box">
                        <div className="shop">
                            <p>Shopbop</p>
                            <p>Designer Fashion Brands</p>
                        </div>
                    </div>
                </div>    
                  
                <div className="footer-bottom-col">
                    <div className="footer-bottom-col-box">
                        <div className="warehouse-deals">
                            <p>Open-Box</p>
                            <p>Discounts</p>
                        </div>
                    </div>
                </div>     
                <div className="footer-bottom-col">
                    <div className="footer-bottom-col-box">
                        <div className="whole-foods">
                            <p>Whole Foods Market</p>
                            <p>We Believe in Real Food</p>
                        </div>
                    </div>
                </div>     
                <div className="footer-bottom-col">
                    <div className="footer-bottom-col-box">
                        <div className="amazn-renewed">
                            <p>Amazon Renewed</p>
                            <p>Like-new products you can trust</p>
                        </div>
                    </div>
                </div>    
                <div className="footer-bottom-col">
                    <div className="footer-bottom-col-box">
                        <div className="blink">
                            <p>Blink</p>
                            <p>Smart Security for Every Home</p>
                        </div>
                    </div>
                </div>  
             </div>
             <div className="footer-bottom-line">
                <span>Conditions of Use</span>
                <span>Privacy Notice</span>
                <span>Interest-Based Ads</span>
                <p> &copy;1996-2004, Amazon.com, Inc. or its affiliates</p>
             </div>
             <div className="footer-address">
                <p>Amazon.com.ca ULC | 40 King Street W 47th Floor, Toronto, Ontario, Canada, M5H 3Y2 |1-877-586-3230</p>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
