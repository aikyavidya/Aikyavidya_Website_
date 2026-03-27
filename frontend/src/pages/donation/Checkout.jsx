import "./checkout.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    certificate: false,
  });


  const handlePayment = async (amount) => {
  try {
    // create order
    const res = await fetch("http://localhost:5000/api/payment/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    });

    const order = await res.json();

    const options = {
      key: "YOUR_KEY_ID", // from Razorpay
      amount: order.amount,
      currency: "INR",
      name: "AIKYA VIDYA",
      description: "Donation",
      order_id: order.id,

      handler: async function (response) {
        await fetch("http://localhost:5000/api/payment/verify-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(response),
        });

        alert("Payment Successful 🎉");
      },

      theme: {
        color: "#ff5a2c",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

  } catch (err) {
    alert("Payment failed");
  }
};

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };
    useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // optional
    });
    }, []);

  return (
    <div className="checkout-page">
            <button className="back-btn" onClick={() => navigate(-1)}>
                ← Back
            </button>

      <h1 className="checkout-title">Confirm Donation</h1>

      <div className="checkout-container">

        {/* LEFT SUMMARY */}
        <div className="checkout-left">

          <h2>Donation Summary</h2>

          <p className="label">Donation for:</p>
          <h3>{state?.title}</h3>

          <p className="label">Amount:</p>
          <h2 className="amount">{state?.amount}</h2>

        </div>

        {/* RIGHT FORM */}
        <div className="checkout-right">

          <label>Name *</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
          />

          <label>Mobile Number *</label>
          <input
            type="text"
            name="phone"
            onChange={handleChange}
          />

          <label>Email ID</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
          />

          {/* <div className="checkbox">
            <input
              type="checkbox"
              name="certificate"
              onChange={handleChange}
            />
            <span>80G Certificate</span>
          </div> */}

          <p className="secure">Pay securely with Razorpay</p>

          <button className="pay-btn" onClick={() => handlePayment(2700)}>
            Donate Now
          </button>

        </div>

      </div>

    </div>
  );
}

export default Checkout;