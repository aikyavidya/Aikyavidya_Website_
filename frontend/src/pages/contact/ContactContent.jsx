import React from "react";
import "./ContactContent.css";

const ContactContent = () => {
  return (

     <div className="contact-page">

    {/* HERO */}
      <section
        className="contact-header"
        style={{
          backgroundImage:
            "url(/images/bg/bredcrumb2.jpg)",
        }}
      >
        <div className="header-content">
          <h1>Contact</h1>
          <p>
            <span > Home </span> › <span className="active">Contact</span>
          </p>
        </div>
      </section>


    <section className="contact-section">
      
      {/* TITLE */}
      <h2 className="contact-title">Get i Touch</h2>

      {/* CONTACT INFO */}
      <div className="contact-info" data-aos="fade-right">

        {/* LEFT */}
        <div className="info-box">
          <div className="icon">📍</div>
          <div>
            <h4>Visit us</h4>
            <p><strong>AIKYA VIDYA - Hare Krishna Movement.</strong></p>
            <p>MLA Colony, Road No -12, Banjara Hills, Hyderabad - 500034.</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="info-group">
          <div className="info-box">
            <div className="icon">✉️</div>
            <div>
              <h4>Mail us</h4>
              <p>connect@aikyavidya.org</p>
              <p>aikyavidya@hkmhyderabad.org</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon">📞</div>
            <div>
              <h4>Call us</h4>
              <p>+91 73868 98991</p>
              <p>+91 89190 35202</p>
            </div>
          </div>
        </div>

      </div>

      {/* FORM CARD */}
      <div className="contact-card" data-aos="fade-left">
        <h3>Leave a Reply</h3>
        <p className="subtitle">
          Your email address will not be published. Required fields are marked *
        </p>

        <form
  className="contact-form"
  onSubmit={async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      website: e.target.website.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);

      // ✅ clear form
      e.target.reset();

    } catch (err) {
      alert("Error sending message");
    }
  }}
>
  <div className="row">
    <input name="name" type="text" placeholder="Your Name *" required />
    <input name="email" type="email" placeholder="Your Email *" required />
  </div>

  <input name="website" type="text" placeholder="Website" />

  <textarea name="message" placeholder="Message..." rows="5" required></textarea>

  <button type="submit">SEND A MESSAGE</button>
</form>
      </div>

      {/* MAP */}
      <div className="map">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=Hare%20Krishna%20Golden%20Temple&t=m&z=12&output=embed"
        ></iframe>
      </div>

    </section>
    </div>
  );
};

export default ContactContent;