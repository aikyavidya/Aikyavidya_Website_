import "./about.css";
import { BsBasket2Fill, BsBookHalf, BsHandThumbsUpFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function AboutSection() {
  return (
    <section className="about">
      <div className="container">

      <div className="about-container">

        {/* LEFT CARD */}
        <div className="about-left" data-aos="fade-right">
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
        <div className="about-right" data-aos="fade-left">

          <p>
            <strong>AIKYA VIDYA</strong> is empowering underprivileged children from rural areas by providing them with post-school free education, food and values. It is our endeavour to provide the anchor in the lives of children. Helping them latch on to the right purpose of their lives, understand it, and receive education not as an unavoidable rote but as an essential foundation for life and thus sail the currents of life admirably and responsibly.
          </p>

          {/* FEATURES */}
          <div className="features">

            <div className="feature">
              <div className="icon"><BsBasket2Fill /></div>
              <p>Food</p>
            </div>

            <div className="feature">
              <div className="icon"><BsBookHalf /></div>
              <p>Education</p>
            </div>

            <div className="feature">
              <div className="icon"><BsHandThumbsUpFill /></div>
              <p>Values</p>
            </div>

          </div>

        </div>

      </div>
</div>
    </section>
  );
}