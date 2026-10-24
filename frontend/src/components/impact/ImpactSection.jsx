import "./impact.css";
import { Link } from "react-router-dom";
export default function ImpactSection() {
  return (
    <section className="impact">
       <div className="container impact">
      {/* LEFT */}
      <div className="impact-left" data-aos="fade-right">

        <div className="image-stack">
          <img
            src="/images/home-1_01-2.png"
            alt=""
            className="img-back"
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />

          <img
            src="/images/12.webp"
            alt="AIKYA VIDYA program photo"
            className="img-front"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="impact-badge">
          <span>70 CENTERS</span>
          <span>1600+ CHILDREN</span>
        </div>

      </div>

      {/* RIGHT */}
      <div className="impact-right" data-aos="fade-left">
        <p className="subtitle">OUR IMPACT</p>

        <h2>A Resonating Impact</h2>

        <p>
          <strong>AIKYA VIDYA</strong> is currently operational across 70 centres
          nurturing 1600+ children. Farther away, the program has entered the lives
          of Chenchu tribes of the Nallamalla forests and slums of Hyderabad and
          many villages in Telangana and Andhra Pradesh.
        </p>

        <Link to="/impact" className="btn">
Learn More</Link>
      </div>
      </div>
    </section>
  );
}