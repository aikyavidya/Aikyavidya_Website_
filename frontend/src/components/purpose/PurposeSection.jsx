import { useState } from "react";
import "./purpose.css";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function PurposeSection() {
  const [activeTab, setActiveTab] = useState("purpose");

  const content = {
    purpose: `The purpose of education is to develop comprehensive knowledge and a well-balanced outlook on life. AIKYA VIDYA is an integrative post-school educational program designed to put together knowledge-based and value-based teaching to shape young impressionable minds to grow as all-rounded individuals of intellect holistically and support the system in creating well-balanced citizens of India.`,
    
    vision: `A commitment to a strong nation by ensuring Food, Education & Values to underprivileged children.`,

    mission: `To reach 1000 villages by the year 2030.`
  };

  return (
    <section className="purpose-section">

      {/* LEFT SIDE */}
      <div className="purpose-left" data-aos="fade-right">

        {/* TABS */}
        <div className="tabs">
          <button
            className={activeTab === "purpose" ? "active" : ""}
            onClick={() => setActiveTab("purpose")}
          >
            Our Purpose
          </button>

          <button
            className={activeTab === "vision" ? "active" : ""}
            onClick={() => setActiveTab("vision")}
          >
            Vision
          </button>

          <button
            className={activeTab === "mission" ? "active" : ""}
            onClick={() => setActiveTab("mission")}
          >
            Mission
          </button>
        </div>

        {/* CONTENT */}
        <div className="tab-content">
          <p>{content[activeTab]}</p>


<Link to="/donation" className="btn">
  DONATE NOW ❤
</Link>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="purpose-right" data-aos="fade-left">
        <div className="overlay"></div>

        <div className="video-box">
          <div className="play-btn">
            <FaPlay />
          </div>
          <span>WATCH VIDEO</span>
        </div>
      </div>

    </section>
  );
}