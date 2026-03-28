import { razorpayInstance } from "../config/razorpay.js";
import crypto from "crypto";
import db from "../config/db.js";

// =======================
// CREATE ORDER
// =======================
export const createOrder = async (req, res) => {
  try {
    const { amount, name, email, phone } = req.body;

    if (!razorpayInstance) {
      return res.status(500).json({
        error: "Payment system not configured yet",
      });
    }

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpayInstance.orders.create(options);

    res.json(order);

  } catch (err) {
    console.error("CREATE ORDER ERROR:", err);
    res.status(500).json({ error: "Order creation failed" });
  }
};

// =======================
// VERIFY PAYMENT + SAVE
// =======================
export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      name,
      email,
      phone,
      amount,
      title,
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ success: false });
    }

    // ✅ SAVE TO DATABASE ONLY AFTER SUCCESS
    await db.execute(
      `INSERT INTO donations 
       (name, email, phone, amount, title, razorpay_order_id, razorpay_payment_id)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        email,
        phone,
        amount,
        title,
        razorpay_order_id,
        razorpay_payment_id,
      ]
    );

    res.json({
      success: true,
      payment_id: razorpay_payment_id,
    });

  } catch (err) {
    console.error("VERIFY ERROR:", err);
    res.status(500).json({ success: false });
  }
};