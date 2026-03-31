import React, { useState } from "react";
import "./ContactContent.css";
import toast from "react-hot-toast";

const ContactContent = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully 🚀");
        e.target.reset();
      } else {
        toast.error(data.message || "Something went wrong");
      }

    } catch (err) {
      toast.error("Server error, try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">

      {/* HERO */}
      <section
        className="contact-header"
        style={{
          backgroundImage: "url(/images/bg/bredcrumb2.jpg)",
        }}
      >
        <div className="header-content">
          <h1>Contact</h1>
          <p>
            <span> Home </span> › <span className="active">Contact</span>
          </p>
        </div>
      </section>

      <section className="contact-section">

        <h2 className="contact-title">Get i Touch</h2>

        <div className="contact-info" data-aos="fade-right">

          <div className="info-box">
            <div className="icon">📍</div>
            <div>
              <h4>Visit us</h4>
              <p><strong>AIKYA VIDYA - Hare Krishna Movement.</strong></p>
              <p>MLA Colony, Road No -12, Banjara Hills, Hyderabad - 500034.</p>
            </div>
          </div>

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

        <div className="contact-card" data-aos="fade-left">
          <h3>Leave a Reply</h3>
          <p className="subtitle">
            Your email address will not be published. Required fields are marked *
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <input name="name" type="text" placeholder="Your Name *" required />
              <input name="email" type="email" placeholder="Your Email *" required />
            </div>

            <textarea name="message" placeholder="Type your Message" rows="5" required></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "SEND A MESSAGE"}
            </button>
          </form>
        </div>

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