import React, { useState } from "react";
import "./ContactContent.css";
import toast from "react-hot-toast";
import { apiUrl } from "../../config/api";

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

      const res = await fetch(apiUrl("/api/contact"), {
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
        toast.error(data.message || "Unable to send your message. Please try again.");
      }
    } catch (err) {
      console.error("Contact form submission failed:", err);
      toast.error("Unable to connect to the contact service. Please try again later.");
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
              <p>
                <strong>AIKYA VIDYA - Hare Krishna Movement.</strong>
              </p>
              <p>MLA Colony, Road No -12, Banjara Hills, Hyderabad - 500034.</p>
            </div>
          </div>

          <div className="info-group">
            <div className="info-box">
              <div className="icon">✉️</div>
              <div>
                <h4>Mail us</h4>
                <p><a href="mailto:connect@aikyavidya.org">connect@aikyavidya.org</a></p>
                <p><a href="mailto:aikyavidya@hkmhyderabad.org">aikyavidya@hkmhyderabad.org</a></p>
              </div>
            </div>

            <div className="info-box">
              <div className="icon">📞</div>
              <div>
                <h4>Call us</h4>
                <p><a href="tel:+917386898991">+91 73868 98991</a></p>
                <p><a href="tel:+918919035202">+91 89190 35202</a></p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-card" data-aos="fade-left">
          <h3>Leave a Reply</h3>
          <p className="subtitle">
            Your email address will not be published. Required fields are marked
            *
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <input
                id="contact-name"
                name="name"
                type="text"
                aria-label="Your Name"
                autoComplete="name"
                placeholder="Your Name *"
                required
              />
              <input
                id="contact-email"
                name="email"
                type="email"
                aria-label="Your Email"
                autoComplete="email"
                placeholder="Your Email *"
                required
              />
            </div>

            <textarea
              name="message"
              aria-label="Type your Message"
              placeholder="Type your Message"
              rows="5"
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "SEND A MESSAGE"}
            </button>
          </form>
        </div>

        <div className="map">
          <iframe
            title="Map showing the AIKYA VIDYA contact location"
            src="https://maps.google.com/maps?q=Hare%20Krishna%20Golden%20Temple&t=m&z=12&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactContent;
