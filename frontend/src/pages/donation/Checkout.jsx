import "./checkout.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [customAmount, setCustomAmount] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // ======================
  // HANDLE PAYMENT
  // ======================
  const handlePayment = async () => {
    try {
      if (!form.name || !form.phone) {
        alert("Please fill required fields");
        return;
      }

      let finalAmount = 0;
      if (state?.amount) {
        finalAmount = parseInt(state.amount.replace(/[^0-9]/g, ""));
      } else if (customAmount) {
        finalAmount = parseInt(customAmount);
      }

      if (!finalAmount || finalAmount <= 0) {
        alert("Please enter a valid donation amount.");
        return;
      }

      // 🔹 STEP 1: CREATE ORDER
      const res = await fetch("http://localhost:5000/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: finalAmount,
          name: form.name,
          email: form.email,
          phone: form.phone,
        }),
      });

      const order = await res.json();

      // 🔹 STEP 2: OPEN RAZORPAY
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: order.amount,
        currency: "INR",
        name: "AIKYA VIDYA",
        description: state?.title,
        order_id: order.id,

        handler: async function (response) {
          // 🔹 STEP 3: VERIFY + SAVE
          const verifyRes = await fetch(
            "http://localhost:5000/api/payment/verify-payment",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                ...response,
                name: form.name,
                email: form.email,
                phone: form.phone,
                amount: finalAmount,
                title: state?.title,
              }),
            }
          );

          const data = await verifyRes.json();

          if (data.success) {
            // ✅ REDIRECT TO SUCCESS PAGE
            navigate("/success", {
              state: {
                name: form.name,
                amount: finalAmount,
                title: state?.title,
                paymentId: response.razorpay_payment_id,
              },
            });
          } else {
            alert("Payment verification failed");
          }
        },

        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone,
        },

        theme: {
          color: "#ff5a2c",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      console.error(err);
      alert("Payment failed");
    }
  };

  return (
    <div className="checkout-page">

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1 className="checkout-title">Confirm Donation</h1>

      <div className="checkout-container">

        {/* LEFT */}
        <div className="checkout-left">
          <h2>Donation Summary</h2>

          <p className="label">Donation for:</p>
          <h3>{state?.title}</h3>

          <p className="label">Amount:</p>
          {state?.amount ? (
            <h2 className="amount">{state?.amount}</h2>
          ) : (
            <div className="custom-amount-container">
              <span className="currency-symbol">₹</span>
              <input
                type="number"
                min="1"
                placeholder="Enter amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="custom-amount-input"
              />
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div className="checkout-right">

          <label>Name *</label>
          <input name="name" onChange={handleChange} />

          <label>Mobile Number *</label>
          <input name="phone" onChange={handleChange} />

          <label>Email ID</label>
          <input name="email" onChange={handleChange} />

          <p className="secure">Pay securely with Razorpay</p>

          <button className="pay-btn" onClick={handlePayment}>
            Donate Now
          </button>

        </div>

      </div>
    </div>
  );
}

export default Checkout;