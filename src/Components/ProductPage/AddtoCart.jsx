import React from 'react'

const AddtoCart = () => {
  return (
    <>
    <section className='add-to-cart-sec' style={{border:"1px solid rgb(209, 204, 204)"}}>
        <div className='add-to-cart-container'>
            <div className='add-to-cart-delivery'>
                <p style={{fontSize:"15px", fontWeight:600}}>Buy new:</p>
                <p style={{fontSize:"22px", fontWeight:600}}><sup style={{fontSize:"12px"}}>$</sup>428</p>
                <p style={{marginTop:"12px", fontSize:"15px"}}><span style={{color: "#007185"}}>FREE delivery</span> <b>Friday, July 26.</b><span style={{color: "#007185"}}>Details</span></p>
                <p style={{marginTop:"12px", fontSize:"15px"}}>Or fastest delivery <b>Wednesday, July 24.</b> Order within <span style={{color: "#007600"}}>5 hrs 37 mins.</span> <span style={{color: "#007185"}}>Details</span></p>
                <p style={{marginTop:"12px", fontSize:"12px", color: "#007185"}}><i class="bi bi-geo-alt"></i>Delivering to London N6J – Update location</p>
                <p style={{fontSize:"22px", fontWeight:500, color: "#007600"}}>In Stock</p>
                <div className="d-flex justify-content-between" style={{background:"#F0F2F2", border:"1px solid rgb(209, 204, 204)", borderRadius:"4px", padding:"4px"}}><p>Quantity: 1</p> <i className="bi bi-chevron-down"></i></div>
                <p style={{background:"#FFD814", border:"1px solid rgb(209, 204, 204)", borderRadius:"16px", padding:"4px", marginTop:"12px", textAlign:"center"}}>Add to Cart</p>
                <p style={{background:"#FFA41C", border:"1px solid rgb(209, 204, 204)", borderRadius:"16px", padding:"4px", marginTop:"12px", textAlign:"center"}}>Buy</p>
                <div className='d-flex' style={{fontSize:"12px", marginTop:"12px"}}>
                    <div className='payment-ship-sold col-lg-4' style={{color:"#565959"}}>
                      <p>Payment</p>
                      <p>Ships from</p>
                      <p>Sold by</p>
                      <p>Returns</p>
                      <p>Support</p>
                    </div>
                    <div className='transac-return col-lg-8' style={{color: "#007185"}}>
                        <p>Secure transaction</p>
                        <p>Amazon</p>
                        <p>amazon.ca</p>
                        <p>Eligible for Return, Refund or Replacement within 30 days of receipt</p>
                        <p>Product support included</p>
                    </div>
                </div>
                
                
            </div>
        </div>
    </section>
    </>
  )
}

export default AddtoCart