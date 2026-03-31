import "./donation.css";
import { useNavigate } from "react-router-dom";

function Donation() {
const navigate = useNavigate();
  // ANNADAAN 
const annadaan = [
  { title: "Feed 100 people", amount: "₹ 2700" },
  { title: "Feed 200 people", amount: "₹ 5400" },
  { title: "Feed 300 people", amount: "₹ 8100" },
  { title: "Feed 500 people", amount: "₹ 13500" },
  { title: "Feed 1000 people", amount: "₹ 27,000" },
  { title: "Feed 1500 people", amount: "₹ 40,500" },
  { title: "Feed 3000 people", amount: "₹ 81,000" },
  { title: "Feed 5000 people", amount: "₹ 1,35,000" },
  { title: "Feed 10,000 people", amount: "₹ 2,70,000" },
  { title: "Donate any other Amount", amount: "" }, // 🔥 IMPORTANT
];
// 🔥 SPONSOR (FULL CORRECT)
const sponsor = [
  {
    title: "Sponsor 1 Child",
    sub: "(Food and Education For 1 Year)",
    amount: "₹ 12,000",
  },
  {
    title: "Sponsor 2 Children",
    sub: "(Food and Education For 1 Year)",
    amount: "₹ 24,000",
  },
  {
    title: "Sponsor 4 Children",
    sub: "(Food and Education For 1 Year)",
    amount: "₹ 48,000",
  },
  {
    title: "Sponsor 8 Children",
    sub: "(Food and Education For 1 Year)",
    amount: "₹ 96,000",
  },
  {
    title: "Sponsor 9 Children",
    sub: "(Food and Education For 1 Year)",
    amount: "₹ 1,08,000",
  },
  {
    title: "Donate any other Amount",
    sub: "(Food and Education)",
    amount: "",
  },
];


 // 🔥 VIDYA DAAN (FULL CORRECT + COMPLETE)
const vidya = [
  {
    title: "Sponsor Education of 1 Child for 1 Academic Year",
    amount: "₹ 5000",
  },
  {
    title: "Sponsor Education of 3 Children for 1 Academic Year",
    amount: "₹ 15000",
  },
  {
    title: "Sponsor Education of 5 Children for 1 Academic Year",
    amount: "₹ 25000",
  },
  {
    title: "Sponsor Education of 1 Child for 1 Month",
    amount: "₹ 500",
  },
  {
    title: "Sponsor Education of 5 Children for 1 Month",
    amount: "₹ 2500",
  },
  {
    title: "Sponsor Education of 10 Children for 1 Month",
    amount: "₹ 5000",
  },
  {
    title: "Sponsor Education of 25 Children for 1 Month",
    amount: "₹ 12,500",
  },
  {
    title: "Sponsor Education of 50 Children for 1 Month",
    amount: "₹ 25,000",
  },
  {
    title: "Sponsor Education of 75 Children for 1 Month",
    amount: "₹ 37,500",
  },
  {
    title: "Sponsor Education of 100 Children for 1 Month",
    amount: "₹ 50,000",
  },
  {
    title: "Sponsor Education of 150 Children for 1 Month",
    amount: "₹ 75,000",
  },
  {
    title: "Sponsor Education of 200 Children for 1 Month",
    amount: "₹ 1,00,000",
  },
  {
    title: "Sponsor Education of 1 Entire Village for 1 Whole Year",
    amount: "₹ 1,50,000",
  },
  {
    title: "Sponsor Education of 1 Entire Village for 1 Month",
    amount: "₹12,500",
  },
  {
    title: "Donate any other Amount ",
    amount: "",
  },
  
  
];

  const handleDonate = (amount) => {
    alert(`Proceed to donate ${amount}`);
    // 🔥 Later connect Razorpay here
  };

  return (
    <div className="donation-page">

      {/* HERO */}
      <section
        className="donation-header"
        style={{
          backgroundImage:
            "url(/images/bg/bredcrumb2.jpg)",
        }}
      >
        <div className="donation-overlay">
          <h1>Donate</h1>
         
        </div>
      </section>

    {/* TAGLINE */}
<section className="donation-tagline">
  <div className="container">
    <h2>
      We are providing <span>Free Food, Education</span> and Values for life
      based on Bhagavad-Gita to underprivileged in
      <span> Rural Areas of India</span>
    </h2>
  </div>
</section>

{/* ANNADAAN */}
<section className="donation-block annadaan-bg">
  <div className="container donation-list">
    {annadaan.map((item, i) => (
      <div className="donation-row" key={i} data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
        <h3>{item.title}</h3>

        <div className="donation-price">{item.amount}</div>

        <button
            onClick={() =>
                navigate("/checkout", {
                state: {
                    title: item.title,
                    amount: item.amount,
                },
                })
            }
            >
            DONATE NOW
        </button>
      </div>
    ))}
  </div>
</section>

{/* SPONSOR */}
<section className="donation-block sponsor-bg">
  <div className="container donation-list">
    {sponsor.map((item, i) => (
      <div className="donation-row" key={i} data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
        <div>
          <h3>{item.title}</h3>
          <p className="sub">{item.sub}</p>
        </div>

        <div className="donation-price">{item.amount}</div>

        <button
            onClick={() =>
                navigate("/checkout", {
                state: {
                    title: item.title,
                    amount: item.amount,
                },
                })
            }
            >
            DONATE NOW
        </button>
      </div>
    ))}
  </div>
</section>

{/* VIDYA */}
<section className="donation-block vidya-bg">
  <div className="container donation-list">
    {vidya.map((item, i) => (
      <div className="donation-row" key={i} data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
        <h3>{item.title}</h3>

        <div className="donation-price">{item.amount}</div>

        <button
            onClick={() =>
                navigate("/checkout", {
                state: {
                    title: item.title,
                    amount: item.amount,
                },
                })
            }
            >
            DONATE NOW
        </button>
      </div>
    ))}
  </div>
</section>

        {/* DONATION NOTE / REQUEST */}
        <section className="donation-note">
        <div className="note-container">
            <p>
            Gentle Request! While doing Paytm/UPI App Payments or Bank (NEFT/ RTGS),
            please send us screenshot along with complete address and PAN details on
            our WhatsApp number:
            <a href="tel:+918121795663"> +91 81217 95663</a> or mail us at
            <a href="mailto:connect2aikyavidya@gmail.com">
                {" "}connect2aikyavidya@gmail.com
            </a>.
            You may also call this number for queries.
            </p>
        </div>
        </section>


      {/* BANK DETAILS */}
<section className="bank-section" data-aos="fade-up">
  <div className="bank-container">

    <div className="bank-grid">

      {/* LEFT */}
      <div className="bank-left">

        <h3>Donation Through Bank (NEFT / RTGS)</h3>

        <p>
          Beneficiary Name: <b>HARE KRISHNA MOVEMENT</b><br />
          Bank Name: Yes Bank Ltd.<br />
          A/c No: 002288700000804<br />
          IFSC Code: YESB0000022
        </p>

        <h4>Pay by UPI Apps</h4>

        <img
          className="upi-apps"
          src="/images/donation/upi_apps_logo.png"
          alt="upi apps"
        />

        <h2 className="upi-number">7207 188 108</h2>

      </div>

      {/* RIGHT */}
      <div className="bank-right">

        <h3>Scan QR Code</h3>

        <img
          className="upi-qr"
          src="/images/upi_qr.webp"
          alt="QR Code"
        />

      </div>

    </div>

  </div>
</section>

      {/* IMAGE GALLERY */}
<section className="donation-gallery" data-aos="zoom-in">
  <div className="gallery-container">

    <div className="gallery-grid">
      <img src="/images/donation/a1.webp" alt="" />
      <img src="/images/donation/a2.webp" alt="" />
      <img src="/images/donation/a3.webp" alt="" />
      <img src="/images/donation/a4.webp" alt="" />
    </div>

  </div>
</section>

    </div>
  );
}

export default Donation;