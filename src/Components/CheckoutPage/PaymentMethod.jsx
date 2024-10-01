import React from "react";

const PaymentMethod = () => {
  return (
    <div className="payment-method-sec">
      <div className="payment-method-container">
        <div className="payment-method-heading flex gap-6">
          <p
            className="text-xl font-semibold"
            style={{ color: "#000", width: "2%" }}
          >
            2
          </p>
          <div className="payment-box w-4/5" style={{ width: "98%" }}>
            <p className="text-xl font-semibold" style={{ color: "#000" }}>
              Choose a payment Method
            </p>
            <div
              className="payment-card-box p-3 rounded-xl"
              style={{ border: "1px solid #D5D9D9" }}
            >
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Pay on delivery
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Use a debit or credit
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
