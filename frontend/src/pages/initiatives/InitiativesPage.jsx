import React from "react";
import { Link } from "react-router-dom";
import { FaUtensils, FaBook, FaHeart, FaCheckCircle } from "react-icons/fa";
import "./InitiativesPage.css";

const InitiativesPage = () => {
  return (
    <div className="initiatives-page">

      {/* VIDEO BANNER */}
      <section className="video-banner">
        <iframe
          src="https://www.youtube-nocookie.com/embed/K7d2EnuQNQc?autoplay=1&mute=1&controls=0&loop=1&playlist=K7d2EnuQNQc&playsinline=1"
          title="Banner Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
        ></iframe>

        <div className="overlay"></div>

        <div className="banner-content">
          <h1>Our Initiatives</h1>
        </div>
      </section>

      {/* Title */}
      <div className="container">
        <h2 className="section-title">Our Initiatives</h2>
      </div>

      {/* Services */}
      <section className="services container">
        <Link to="/food" className="service-card">
          <FaUtensils className="icon" />
          <h3>Food</h3>
        </Link>

        <Link to="/education" className="service-card">
          <FaBook className="icon" />
          <h3>Education</h3>
        </Link>

        <Link to="/values" className="service-card">
          <FaHeart className="icon" />
          <h3>Values</h3>
        </Link>
      </section>

      {/* Life Skills */}
      <section className="life-skills">
        <div className="container">
          <h2 className="section-title">Life Skills</h2>

          <div className="skills-grid">
            <div className="skill-box">
              <img src="/images/initiative/ic1.webp" />
              <h4>Spiritual Education</h4>
              <p>Yoga & Meditation<br/>Prayers<br/>Philosophy</p>
            </div>

            <div className="skill-box">
              <img src="/images/initiative/ic2.webp" />
              <h4>Arts</h4>
              <p>Singing<br/>Dancing<br/>Musical Instruments<br/>Story Telling India</p>
            </div>

            <div className="skill-box">
              <img src="/images/initiative/ic3.webp" />
              <h4>Health & Hygiene</h4>
              <p>Health Care<br/>Basic Hygiene</p>
            </div>
          </div>

          <div className="skills-grid second-row">
            <div className="skill-box">
              <img src="/images/initiative/ic4.webp" />
              <h4>Leadership</h4>
              <p>Public Speaking<br/>Event Management<br/>Hospitality<br/>Planning & Supervision<br/>Financial Management<br/>Soft Skills</p>
            </div>

            <div className="skill-box">
              <img src="/images/initiative/ic5.webp" />
              <h4>BASE</h4>
              <p>Kitchen Gardening<br/>Promoting Horticulture<br/>Waste Management<br/>Cattle Rearing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Image */}
      <section className="full-banner container">
        <img src="/images/initiative/ak-12.webp" />
      </section>

      {/* Rural Development */}
      <section className="rural">
        <div className="container">
          <h2 className="section-title">Rural Development</h2>

          <div className="rural-grid">
            <div className="rural-img">
              <img src="/images/initiative/img2.webp" />
            </div>

            <div className="rural-list">
              <ul>
                <li><FaCheckCircle /> Cleanliness & Hygiene</li>
                <li><FaCheckCircle /> Education & Career guidance</li>
                <li><FaCheckCircle /> Art of Parenting</li>
                <li><FaCheckCircle /> Donation of basic necessities</li>
                <li><FaCheckCircle /> Sustaining Folk Arts, Songs & Music</li>
                <li><FaCheckCircle /> Celebration of Village Festivals</li>
                <li><FaCheckCircle /> Spiritual Upliftment</li>
                <li><FaCheckCircle /> Eradication of blind beliefs</li>
                <li><FaCheckCircle /> Encouraging organic farming</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default InitiativesPage;