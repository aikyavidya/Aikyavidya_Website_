import "./about.css";
import { FaUtensils, FaBookOpen, FaHandsHelping } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function AboutSection() {
  return (
    <section className="about">
      <div className="container">

      <div className="about-container">

        {/* LEFT CARD */}
        <div className="about-left">
          <h2>
            Enriching <br />
            communities with <br />
            Food, Education & <br />
            Values
          </h2>

         <Link to="/donation" className="btn">
  DONATE NOW ❤
</Link>
        </div>

        {/* RIGHT */}
        <div className="about-right">

          <p>
            <strong>AIKYA VIDYA</strong> is empowering underprivileged children from rural areas by providing them with post-school free education, food and values. It is our endeavour to provide the anchor in the lives of children. Helping them latch on to the right purpose of their lives, understand it, and receive education not as an unavoidable rote but as an essential foundation for life and thus sail the currents of life admirably and responsibly.
          </p>

          {/* FEATURES */}
          <div className="features">

            <div className="feature">
              <div className="icon"><FaUtensils /></div>
              <p>Food</p>
            </div>

            <div className="feature">
              <div className="icon"><FaBookOpen /></div>
              <p>Education</p>
            </div>

            <div className="feature">
              <div className="icon"><FaHandsHelping /></div>
              <p>Values</p>
            </div>

          </div>

        </div>

      </div>
</div>
    </section>
  );
}