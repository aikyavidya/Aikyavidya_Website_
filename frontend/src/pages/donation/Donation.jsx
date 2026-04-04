import "./donation.css";
import { useNavigate } from "react-router-dom";

function Donation() {
const navigate = useNavigate();
  // ANNADAAN 
// ANNADAAN (UPDATED TEXT EXACTLY LIKE ORIGINAL)
const annadaan = [
  {
    title: "Donate meals for 100 Children",
    sub: "(Your generous donation ensures that 100 children receive a nutritious meal a day)",
    amount: "₹ 2700",
  },
  {
    title: "Donate meals for 200 Children",
    sub: "(Your generous donation ensures that 200 children receive a nutritious meal a day)",
    amount: "₹ 5400",
  },
  {
    title: "Donate meals for 300 Children",
    sub: "(Your generous donation ensures that 300 children receive a nutritious meal a day)",
    amount: "₹ 8100",
  },
  {
    title: "Donate meals for 500 Children",
    sub: "(Your generous donation ensures that 500 children receive a nutritious meal a day)",
    amount: "₹ 13500",
  },
  {
    title: "Donate meals for 1000 Children",
    sub: "(Your generous donation ensures that 1000 children receive a nutritious meal a day)",
    amount: "₹ 27,000",
  },
  {
    title: "Donate meals for 1500 Children",
    sub: "(Your generous donation ensures that 1500 children receive a nutritious meal a day)",
    amount: "₹ 40,500",
  },
  {
    title: "Donate meals for 3000 Children",
    sub: "(Your generous donation ensures that 3000 children receive a nutritious meal a day)",
    amount: "₹ 81,000",
  },
  {
    title: "Donate meals for 5000 Children",
    sub: "(Your generous donation ensures that 5000 children receive a nutritious meal a day)",
    amount: "₹ 1,35,000",
  },
  {
    title: "Donate meals for 10,000 Children",
    sub: "(Your generous donation ensures that 10,000 children receive a nutritious meal a day)",
    amount: "₹ 2,70,000",
  },
  {
    title: "Donate any other Amount",
    sub: "",
    amount: "",
  },
];


// SPONSOR CHILDREN (FIXED TEXT)
const sponsor = [
  {
    title: "Sponsor 1 Child",
    sub: "(Your sponsorship ensures education and daily meals for a child throughout the year.)",
    amount: "₹ 12,000",
  },
  {
    title: "Sponsor 2 Children",
    sub: "(Your sponsorship ensures education and daily meals for 2 Children throughout the year.)",
    amount: "₹ 24,000",
  },
  {
    title: "Sponsor 4 Children",
    sub: "(Your sponsorship ensures education and daily meals for 4 Children throughout the year.)",
    amount: "₹ 48,000",
  },
  {
    title: "Sponsor 8 Children",
    sub: "(Your sponsorship ensures education and daily meals for 8 Children throughout the year.)",
    amount: "₹ 96,000",
  },
  {
    title: "Sponsor 9 Children",
    sub: "(Your sponsorship ensures education and daily meals for 9 Children throughout the year.)",
    amount: "₹ 1,08,000",
  },
  {
    title: "Donate any other Amount",
    sub: "(Your sponsorship ensures education and daily meals for Children.)",
    amount: "",
  },
];


// VIDYA DAAN (MATCHED FROM ORIGINAL)
const vidya = [
  {
    title: "Sponsor Education of 1 Child for 1 Academic Year",
    sub: "(Your sponsorship ensures a child's education for 12 months.)",
    amount: "₹ 5000",
  },
  {
    title: "Sponsor Education of 3 Children for 1 Academic Year",
    sub: "(Your sponsorship ensures 3 Children education for 12 months.)",
    amount: "₹ 15000",
  },
  {
    title: "Sponsor Education of 5 Children for 1 Academic Year",
    sub: "(Your sponsorship ensures 5 Children education for 12 months.)",
    amount: "₹ 25000",
  },
  {
    title: "Sponsor Education of 1 Child for 1 Month",
    sub: "(Your sponsorship ensures a child's education for 1 month.)",
    amount: "₹ 500",
  },
  {
    title: "Sponsor Education of 5 Children for 1 Month",
    sub: "(Your sponsorship ensures 5 Children education for 1 month.)",
    amount: "₹ 2500",
  },
  {
    title: "Sponsor Education of 10 Children for 1 Month",
    sub: "(Your sponsorship ensures 10 Children education for 1 month.)",
    amount: "₹ 5000",
  },
  {
    title: "Sponsor Education of 25 Children for 1 Month",
    sub: "(Your sponsorship ensures 25 Children education for 1 month.)",
    amount: "₹ 12,500",
  },
  {
    title: "Sponsor Education of 50 Children for 1 Month",
    sub: "(Your sponsorship ensures 50 Children education for 1 month.)",
    amount: "₹ 25,000",
  },
  {
    title: "Sponsor Education of 75 Children for 1 Month",
    sub: "(Your sponsorship ensures 75 Children education for 1 month.)",
    amount: "₹ 37,500",
  },
  {
    title: "Sponsor Education of 100 Children for 1 Month",
    sub: "(Your sponsorship ensures 100 Children education for 1 month.)",
    amount: "₹ 50,000",
  },
  {
    title: "Donate any other Amount",
    sub: "",
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
            "url(/images/bg/av_new.webp)",
        }}
      >
        <div className="donation-overlay">
         
        </div>
      </section>

    {/* TAGLINE */}
<section className="donation-tagline">
  <div className="container">
    <h2>
      We are providing <span>Free Food, Education</span> and teaching moral values to underprivileged Children in
      <span> Rural Areas of India</span>
    </h2>
  </div>
</section>

{/* ANNADAAN */}
<section className="donation-block annadaan-bg">
  <div className="container donation-list">
    {annadaan.map((item, i) => (
  <div className="donation-row" key={i}>
    <div>
      <h3>{item.title}</h3>
      {item.sub && <p className="sub">{item.sub}</p>}
    </div>

    <div className="donation-price">{item.amount}</div>

    <button
      onClick={() =>
        navigate("/checkout", {
          state: { title: item.title, amount: item.amount },
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
   { sponsor.map((item, i) => (
  <div className="donation-row" key={i}>
    <div>
      <h3>{item.title}</h3>
      <p className="sub">{item.sub}</p>
    </div>

    <div className="donation-price">{item.amount}</div>

    <button
      onClick={() =>
        navigate("/checkout", {
          state: { title: item.title, amount: item.amount },
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
  <div className="donation-row" key={i}>
    <div>
      <h3>{item.title}</h3>
      {item.sub && <p className="sub">{item.sub}</p>}
    </div>

    <div className="donation-price">{item.amount}</div>

    <button
      onClick={() =>
        navigate("/checkout", {
          state: { title: item.title, amount: item.amount },
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