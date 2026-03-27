import { razorpayInstance } from "../config/razorpay.js";
import crypto from "crypto";

// CREATE ORDER
export const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100, // ₹ → paise
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpayInstance.orders.create(options);
        if (!razorpayInstance) {
      return res.status(500).json({
        error: "Payment system not configured yet",
      });
    }

    res.json(order);

  } catch (err) {
    res.status(500).json({ error: "Order creation failed" });
  }
};

// VERIFY PAYMENT
export const verifyPayment = (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false });
  }
};