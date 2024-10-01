import React, { useState } from "react";
import AddressFormModal from "./AddressFormModal";

const ShippingAddress = () => {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNo: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
  });
  const [show, setShow] = useState(false);
  // const [editAddress, setEditAddress] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const toggleAddressForm = () => {
  //   setShow(true);
  //   // setAdrsForm(!adrsForm)
  // };

  const handleSubmit = () => {
    setShow(false);
    setSubmit(true);
  };

  return (
    <section className="shipping-adrs-sec">
      <div className="shipping-adrs-container">
        <div className="shipping-adrs-heading flex gap-6 ">
          <p
            className="text-xl font-semibold"
            style={{ color: "#c45500", width: "2%" }}
          >
            1
          </p>
          <div className="shipping-box w-4/5" style={{ width: "98%" }}>
            <p className="text-xl font-semibold" style={{ color: "#c45500" }}>
              Choose a shipping address
            </p>
            <div className="adrs-box" style={{ border: "1px solid #D5D9D9" }}>
              <div className="adrs-box-add-adrs p-3">
                <p
                  className="text-xl font-semibold"
                  style={{ borderBottom: "1px solid #D5D9D9" }}
                >
                  Your addresses
                </p>
                {submit && (
                  <div
                    className="flex flex-wrap gap-1 bg-red-50 mt-2 p-2 rounded-lg"
                    style={{ border: "1px solid #FBD8B4" }}
                  >
                    <p className="text-base font-semibold capitalize">
                      {formData?.fullName},
                    </p>
                    <p className="text-base font-medium">
                      {formData?.phoneNo},
                    </p>
                    <p className="text-base font-medium capitalize">
                      {formData?.address},
                    </p>
                    <p className="text-base font-medium uppercase">
                      {formData?.postalCode}
                    </p>
                    <p
                      style={{ color: "#007185", cursor: "pointer" }}
                      onClick={handleShow}
                    >
                      Edit Address <span style={{ color: "#1e293b" }}>|</span>
                    </p>
                    <p style={{ color: "#007185", cursor: "pointer" }}>
                      Add delivery instructions
                    </p>
                  </div>
                )}
                <p
                  className="text-base mb-4"
                  style={{ color: "#007185", cursor: "pointer" }}
                  onClick={handleShow}
                >
                  <span>
                    <i
                      className="bi bi-plus text-2xl"
                      style={{ color: "#DDDDDD" }}
                    ></i>
                  </span>
                  Add a adress
                </p>
              </div>

              <div
                className="p-3"
                style={{
                  background: "#F0F2F2",
                  borderTop: "1px solid #D5D9D9",
                }}
              >
                <p
                  className="rounded-3xl text-lg font-semibold"
                  style={{
                    background: "#FFD814",
                    border: "#FFD814",
                    padding: "6px",
                    fontSize: "14px",
                    color: "#000",
                    padding: "8px 12px",
                    display: "inline",
                  }}
                >
                  Ship to this address
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddressFormModal
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
    </section>
  );
};

export default ShippingAddress;
