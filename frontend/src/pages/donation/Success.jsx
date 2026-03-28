import "./success.css";
import { useLocation, useNavigate } from "react-router-dom";

function Success() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="success-page">

      <div className="success-card">

        <h1>🎉 Donation Successful!</h1>

        <p>Thank you for your generous support ❤️</p>

        <div className="receipt">

          <p><strong>Name:</strong> {state?.name}</p>
          <p><strong>Donation For:</strong> {state?.title}</p>
          <p><strong>Amount:</strong> ₹ {state?.amount}</p>
          <p><strong>Payment ID:</strong> {state?.paymentId}</p>

        </div>

        <button onClick={() => navigate("/")}>
          Back to Home
        </button>

      </div>

    </div>
  );
}

export default Success;