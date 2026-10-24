import "./checkout.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { apiUrl } from "../../config/api";

function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [customAmount, setCustomAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    if (isSubmitting) return;

    const phone = form.phone.trim();
    const email = form.email.trim();
    if (!form.name.trim() || !/^[+()\d\s-]{7,20}$/.test(phone)) {
      toast.error("Enter your name and a valid mobile number.");
      return;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Enter a valid email address.");
      return;
    }

    if (!import.meta.env.VITE_RAZORPAY_KEY || typeof window.Razorpay !== "function") {
      toast.error("Secure payment is currently unavailable. Please try again later.");
      return;
    }

    setIsSubmitting(true);
    try {
      let finalAmount = 0;
      if (state?.amount) {
        finalAmount = Number(state.amount.replace(/[^0-9]/g, ""));
      } else if (customAmount) {
        finalAmount = Number(customAmount);
      }

      if (!Number.isSafeInteger(finalAmount) || finalAmount <= 0) {
        toast.error("Please enter a valid donation amount.");
        setIsSubmitting(false);
        return;
      }

      const res = await fetch(apiUrl("/api/payment/create-order"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: finalAmount,
          name: form.name.trim(),
          email,
          phone,
        }),
      });
      const order = await res.json();
      if (!res.ok || !order.id || !order.amount) {
        throw new Error(order.error || "Unable to start secure payment.");
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: order.amount,
        currency: "INR",
        name: "AIKYA VIDYA",
        description: state?.title,
        order_id: order.id,

        handler: async (response) => {
          try {
            const verifyRes = await fetch(apiUrl("/api/payment/verify-payment"), {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...response,
                name: form.name.trim(),
                email,
                phone,
                amount: finalAmount,
                title: state?.title,
              }),
            });
            const data = await verifyRes.json();

            if (!verifyRes.ok || !data.success) {
              throw new Error("Payment verification failed. Please contact support.");
            }

            navigate("/success", {
              state: {
                name: form.name.trim(),
                amount: finalAmount,
                title: state?.title,
                paymentId: response.razorpay_payment_id,
              },
            });
          } catch (error) {
            console.error("Payment verification failed:", error);
            toast.error(error.message || "Payment verification failed. Please contact support.");
          } finally {
            setIsSubmitting(false);
          }
        },

        prefill: {
          name: form.name.trim(),
          email,
          contact: phone,
        },

        theme: {
          color: "#d5b06a",
        },
        modal: {
          ondismiss: () => setIsSubmitting(false),
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (event) => {
        console.error("Payment failed:", event.error);
        toast.error(event.error.description || "Payment failed. Please try again.");
        setIsSubmitting(false);
      });
      rzp.open();
    } catch (err) {
      console.error("Unable to start payment:", err);
      toast.error(err.message || "Unable to start payment. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="checkout-page">
      <button className="back-btn" type="button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1 className="checkout-title">Confirm Donation</h1>

      <div className="checkout-container">
        {/* LEFT */}
        <div className="checkout-left">
          <h2>Donation Summary</h2>

          <p className="label">Donation for:</p>
          <h3>{state?.title || "Donation"}</h3>

          <p className="label">Amount:</p>
          {state?.amount ? (
            <h2 className="amount">{state?.amount}</h2>
          ) : (
            <div className="custom-amount-container">
              <span className="currency-symbol">₹</span>
              <input
                type="number"
                min="1"
                step="1"
                required
                aria-label="Enter donation amount in rupees"
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
          <label htmlFor="donor-name">Name *</label>
          <input id="donor-name" name="name" autoComplete="name" required value={form.name} onChange={handleChange} />

          <label htmlFor="donor-phone">Mobile Number *</label>
          <input id="donor-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required value={form.phone} onChange={handleChange} />

          <label htmlFor="donor-email">Email ID</label>
          <input id="donor-email" name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} />

          <p className="secure">Pay securely with Razorpay</p>

          <button className="pay-btn" type="button" onClick={handlePayment} disabled={isSubmitting}>
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
