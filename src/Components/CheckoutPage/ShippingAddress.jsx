import React, { useState } from "react";
import AddressFormModal from "./AddressFormModal";

const ShippingAddress = () => {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    fullName:"",
    phoneNo:"",
    address:"",
    city:"",
    province:"",
    postalCode:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const toggleAddressForm = () =>{
    console.log("onclick");
    setShow(true);
    // setAdrsForm(!adrsForm)
  }

  const handleSubmit = () =>{
    console.log("handle submit");
    setShow(false);
    setSubmit(true);
  }
  

  return (
    <section className="shipping-adrs-sec">
      <div className="shipping-adrs-container">
        <div className="shipping-adrs-heading flex gap-6 ">
          <p className="text-xl font-semibold" style={{ color: "#c45500",width:"2%" }}>
            1
          </p>
          <div className="shipping-box w-4/5" style={{width:"98%"}}>
            <p className="text-xl font-semibold" style={{ color: "#c45500" }}>
              Choose a shipping address
            </p>
            <div
              className="adrs-box p-3"
              style={{ border: "1px solid #D5D9D9" }}
            >
              <p
                className="text-xl font-semibold"
                style={{ borderBottom: "1px solid #D5D9D9" }}
              >
                Your addresses
              </p>
              <p className="text-base" style={{color:"#007185"}} onClick={toggleAddressForm}><span><i className="bi bi-plus text-2xl" style={{color:"#DDDDDD"}}></i></span>Add a adress</p>
              
              <p>ship to this address</p>
            </div>
          </div>
        </div>
      </div>
      <AddressFormModal handleClose={handleClose} handleShow={handleShow} show={show} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>
    </section>
  );
};

export default ShippingAddress;
